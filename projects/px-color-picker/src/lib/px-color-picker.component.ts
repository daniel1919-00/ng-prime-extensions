import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    Output,
    QueryList,
    SimpleChanges,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ColorPickerModule} from "primeng/colorpicker";
import {DOCUMENT, NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgTemplateOutlet} from "@angular/common";
import {fromEvent, Subject, takeUntil} from "rxjs";
import {PxCanvasSize, PxColor, PxColorFormat, PxColorFormatRGBA} from "./px-color-picker";
import {calculateHue, convertColor} from "./utilities";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {InputNumberModule} from "primeng/inputnumber";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";

@Component({
    selector: 'px-color-picker',
    standalone: true,
    imports: [
        ColorPickerModule,
        FormsModule,
        NgTemplateOutlet,
        NgStyle,
        NgIf,
        NgClass,
        InputGroupModule,
        InputTextModule,
        ButtonModule,
        OverlayPanelModule,
        NgSwitch,
        NgSwitchCase,
        InputNumberModule,
        InputGroupAddonModule
    ],
    templateUrl: './px-color-picker.component.html',
    styleUrl: './px-color-picker.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: PxColorPickerComponent
        }
    ]
})
export class PxColorPickerComponent implements ControlValueAccessor, OnChanges, AfterViewInit, OnDestroy {
    @Input() format: PxColorFormat = 'hex';
    @Input() disabled: boolean = false;
    @Input() inline: boolean = false;
    /**
     * Disabled when using hex color format
     */
    @Input() disableAlpha: boolean = false;
    /**
     * Removes the background & border from the container
     */
    @Input() noBackground = false;
    @Input() mainCanvasSize: PxCanvasSize = {
        width: 200,
        height: 180
    };
    @Input() hueSliderCanvasSize: PxCanvasSize = {
        width: 160,
        height: 12
    };
    @Input() alphaSliderCanvasSize: PxCanvasSize = {
        width: 160,
        height: 12
    };

    @Output() valueChange = new EventEmitter<any>();

    @ViewChild('pxColorPickerCanvas') private pxColorPickerCanvas?: ElementRef<HTMLCanvasElement>;
    @ViewChild('pxColorPickerHueCanvas') private pxColorPickerHueCanvas?: ElementRef<HTMLCanvasElement>;
    @ViewChild('pxColorPickerAlphaCanvas') private pxColorPickerAlphaCanvas?: ElementRef<HTMLCanvasElement>;
    @ViewChildren('pxColorPickerColorPreview') pxColorPickerColorPreview?: QueryList<ElementRef<HTMLDivElement>>;

    protected valueRGBA: PxColorFormatRGBA = {
        r: 255,
        g: 255,
        b: 255,
        a: 1
    };
    protected _value: PxColor | null = null;

    private mainRenderContext?: CanvasRenderingContext2D | null;
    private hueRenderContext?: CanvasRenderingContext2D | null;
    private alphaRenderContext?: CanvasRenderingContext2D | null;
    private draggingColorPicker: boolean = false;
    private draggingHueSlider: boolean = false;
    private draggingAlphaSlider: boolean = false;
    private hueSliderPosition: number = 0;
    private alphaSliderPosition: number = 0;
    private hue: number = 0;
    private alpha: number = 1;
    private colorPickerCanvasPos: { x: number; y: number } = {
        x: 0,
        y: 0
    };
    private onChange?: (value: PxColor | null) => void;
    private onTouched?: () => void;
    private touched = false;
    private onColorPickedTimeout: any = null;
    private removeBoundEvents$: Subject<void> = new Subject();

    constructor(
        protected changeDetector: ChangeDetectorRef,
        private ngZone: NgZone,
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['format']) {
            if (this.format === 'hex') {
                this.alpha = 1;
                this.disableAlpha = true;
            } else {
                if (!changes['disableAlpha']) {
                    this.disableAlpha = false;
                }
                this.alpha = this.valueRGBA.a;
            }
        }

        if (this.mainRenderContext) {
            this.changeDetector.detectChanges();
            this.initColorPicker();
        }
    }

    ngAfterViewInit() {
        this.initColorPicker();
    }

    getValueAs<T = any>(format: PxColorFormat): T {
        return convertColor<T>(this.valueRGBA, format);
    }

    get value() {
        return this._value;
    }

    @Input()
    set value(val: PxColor | null) {
        if (this._value === val) {
            return;
        }

        this._value = val;
        if (val) {
            const rgbaVal = convertColor<PxColorFormatRGBA>(val, 'rgba');
            this.valueRGBA = rgbaVal;
            this.alpha = rgbaVal.a;
            this.hueSliderPosition = this.getHueSliderPositionByColor(rgbaVal);
            this.colorPickerCanvasPos.x = 0;
            this.colorPickerCanvasPos.y = 0;

            if (this.mainRenderContext) {
                this.drawHueSlider();
                this.drawColorPicker(true);
            }
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = () => {
            if (this.touched) {
                return;
            }

            this.touched = true;
            fn();
        };
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(val: any): void {
        this.value = val;
    }

    private initColorPicker() {
        this.removeBoundEvents$.next();

        const pxColorPickerCanvasEl = this.pxColorPickerCanvas?.nativeElement;
        this.mainRenderContext = pxColorPickerCanvasEl?.getContext('2d', {willReadFrequently: true});

        const pxColorPickerHueCanvas = this.pxColorPickerHueCanvas?.nativeElement;
        this.hueRenderContext = pxColorPickerHueCanvas?.getContext('2d', {willReadFrequently: true});

        const pxColorPickerAlphaCanvas = this.pxColorPickerAlphaCanvas?.nativeElement;
        this.alphaRenderContext = pxColorPickerAlphaCanvas?.getContext('2d', {willReadFrequently: true});

        this.ngZone.runOutsideAngular(() => {
            // This is to fix a weird bug, where leaving tab/window focus would clear the canvas context permanently.
            fromEvent(window, 'focus').pipe(takeUntil(this.removeBoundEvents$)).subscribe(() => this.initColorPicker());

            if (pxColorPickerCanvasEl) {
                fromEvent(pxColorPickerCanvasEl, 'mousedown')
                    .pipe(takeUntil(this.removeBoundEvents$))
                    .subscribe($event => {
                        if (this.disabled) return;
                        this.draggingColorPicker = true;
                        const x = ($event as MouseEvent).offsetX;
                        const y = ($event as MouseEvent).offsetY;
                        this.colorPickerCanvasPos.x !== x && this.colorPickerCanvasPos.y !== y && this.pickColor(x, y);
                    });

                fromEvent(pxColorPickerCanvasEl, 'mousemove')
                    .pipe(takeUntil(this.removeBoundEvents$))
                    .subscribe($event => this.draggingColorPicker && this.pickColor(($event as MouseEvent).offsetX, ($event as MouseEvent).offsetY));

            }

            if (pxColorPickerHueCanvas) {
                fromEvent(pxColorPickerHueCanvas, 'mousedown')
                    .pipe(takeUntil(this.removeBoundEvents$))
                    .subscribe($event => {
                        if (this.disabled) return;
                        this.draggingHueSlider = true;
                        this.updateHueSlider($event as MouseEvent);
                    });

                fromEvent(pxColorPickerHueCanvas, 'mousemove')
                    .pipe(takeUntil(this.removeBoundEvents$))
                    .subscribe($event => this.draggingHueSlider && this.updateHueSlider($event as MouseEvent));
            }

            if (pxColorPickerAlphaCanvas) {
                fromEvent(pxColorPickerAlphaCanvas, 'mousedown')
                    .pipe(takeUntil(this.removeBoundEvents$))
                    .subscribe($event => {
                        if (this.disabled) return;
                        this.draggingAlphaSlider = true;
                        this.updateAlphaSlider(($event as MouseEvent).offsetX);
                    });

                fromEvent(pxColorPickerAlphaCanvas, 'mousemove')
                    .pipe(takeUntil(this.removeBoundEvents$))
                    .subscribe($event => this.draggingAlphaSlider && this.updateAlphaSlider(($event as MouseEvent).offsetX));
            }

            fromEvent(this.document, 'mouseup').pipe(takeUntil(this.removeBoundEvents$))
                .subscribe(() => {
                    this.draggingHueSlider = false;
                    this.draggingAlphaSlider = false;
                    this.draggingColorPicker = false;
                });
        });

        this.drawHueSlider();
        this.drawAlphaSlider();
        this.drawColorPicker(this.colorPickerCanvasPos.x === 0 && this.colorPickerCanvasPos.y === 0 && this._value !== null);
        this.updateColorPreview();
    }

    private drawColorPicker(updateColorPickerPos = false): void {
        if (!this.mainRenderContext) {
            return;
        }

        const gradient = this.mainRenderContext.createLinearGradient(0, 0, this.mainCanvasSize.width, this.mainCanvasSize.height);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, `hsl(${this.hue}, 100%, 50%)`);
        gradient.addColorStop(1, 'black');

        this.mainRenderContext.fillStyle = gradient;
        this.mainRenderContext.fillRect(0, 0, this.mainCanvasSize.width, this.mainCanvasSize.height);

        if(updateColorPickerPos) {
            setTimeout(() => {
                if (!this.mainRenderContext) {
                    return;
                }
                const canvasH = this.mainCanvasSize.height;
                const canvasW = this.mainCanvasSize.width;
                const data = this.mainRenderContext.getImageData(0, 0, canvasW, canvasH).data;

                const targetRGBA = this.valueRGBA;
                for(let y = canvasH; y--;) {
                    for(let x = canvasW; x--;) {
                        const pixelIndex = (y * canvasW) + x * 4;
                        const r: number = data[pixelIndex];
                        const g: number = data[pixelIndex + 1];
                        const b: number = data[pixelIndex + 2];

                        if(r === targetRGBA.r && g === targetRGBA.g && b === targetRGBA.b) {
                            this.colorPickerCanvasPos = {x, y};
                            this.drawColorPickerCircle(this.colorPickerCanvasPos.x, this.colorPickerCanvasPos.y);
                            return;
                        }
                    }
                }
            });
        } else {
            this.drawColorPickerCircle(this.colorPickerCanvasPos.x, this.colorPickerCanvasPos.y);
        }
    }

    private drawHueSlider(): void {
        const hueRenderContext = this.hueRenderContext;
        if (!hueRenderContext) {
            return;
        }

        hueRenderContext.clearRect(0, 0, hueRenderContext.canvas.width, hueRenderContext.canvas.height);
        const gradient = hueRenderContext.createLinearGradient(0, 0, hueRenderContext.canvas.width, 0);

        gradient.addColorStop(0, 'rgb(255, 0, 0)'); // Red
        gradient.addColorStop(1 / 6, 'rgb(255, 255, 0)'); // Yellow
        gradient.addColorStop(2 / 6, 'rgb(0, 255, 0)'); // Green
        gradient.addColorStop(3 / 6, 'rgb(0, 255, 255)'); // Cyan
        gradient.addColorStop(4 / 6, 'rgb(0, 0, 255)'); // Blue
        gradient.addColorStop(5 / 6, 'rgb(255, 0, 255)'); // Magenta
        gradient.addColorStop(1, 'rgb(255, 0, 0)'); // Red

        hueRenderContext.fillStyle = gradient;
        hueRenderContext.fillRect(0, 0, hueRenderContext.canvas.width, hueRenderContext.canvas.height);

        if (!this.hueSliderPosition) {
            this.hueSliderPosition = this._value ? this.getHueSliderPositionByColor(convertColor<PxColorFormatRGBA>(this._value, 'rgba')) : 0;
        }

        this.drawSliderHandle(hueRenderContext, this.hueSliderPosition);
    }

    private drawAlphaSlider(): void {
        const alphaRenderContext = this.alphaRenderContext;
        if (!alphaRenderContext) {
            return;
        }

        alphaRenderContext.clearRect(0, 0, alphaRenderContext.canvas.width, alphaRenderContext.canvas.height);
        const gradient = alphaRenderContext.createLinearGradient(0, 0, alphaRenderContext.canvas.width, 0);
        const currentColor = this.valueRGBA;

        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 1)`);

        alphaRenderContext.fillStyle = gradient;
        alphaRenderContext.fillRect(0, 0, alphaRenderContext.canvas.width, alphaRenderContext.canvas.height);

        this.alphaSliderPosition = this.alpha * alphaRenderContext.canvas.width;
        this.drawSliderHandle(alphaRenderContext, this.alphaSliderPosition);
    }

    private drawSliderHandle(context: CanvasRenderingContext2D, currentSliderPosition: number): void {
        const sliderMargin = 1;
        const sliderHeight = context.canvas.height - sliderMargin * 2; // Height of the slider = canvas - top offset - bottom offset
        const sliderY = sliderMargin;
        const sliderWidth = 4; // Width of the slider
        const sliderX = currentSliderPosition - sliderWidth / 2;
        context.fillStyle = 'white';
        context.fillRect(sliderX, sliderY, sliderWidth, sliderHeight);
        context.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        context.lineWidth = 2;
        context.strokeRect(sliderX, sliderY, sliderWidth, sliderHeight);
    }

    private pickColor(x: number, y: number, emitEvent = true): void {
        if (!this.mainRenderContext) {
            return;
        }

        this.colorPickerCanvasPos = {x, y};
        this.mainRenderContext.clearRect(0, 0, this.mainCanvasSize.width, this.mainCanvasSize.height);
        this.drawColorPicker();

        const imageData = this.mainRenderContext.getImageData(x, y, 1, 1).data;
        this.valueRGBA = {r: imageData[0], g: imageData[1], b: imageData[2], a: this.alpha};
        this.updateColorPreview();

        this.drawAlphaSlider();

        // Prevent event spam
        if (this.onColorPickedTimeout) {
            clearTimeout(this.onColorPickedTimeout);
        }

        this.onColorPickedTimeout = setTimeout(() => {
            this.onColorPickedTimeout = null;

            const selectedColor = this.getValueAs(this.format);
            this._value = selectedColor;
            this.changeDetector.markForCheck();

            this.ngZone.run(() => {
                this.onTouched && this.onTouched();
                this.onChange && this.onChange(selectedColor);
                emitEvent && this.valueChange.next(selectedColor);
            });
        }, 200);
    }

    private updateColorPreview() {
        const rgba = this.valueRGBA;
        this.pxColorPickerColorPreview?.forEach(div => div.nativeElement.style.background = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
    }

    private drawColorPickerCircle(x: number, y: number) {
        if (!this.mainRenderContext) {
            return;
        }

        const radius = 5;
        this.mainRenderContext.beginPath();
        this.mainRenderContext.arc(x, y, radius + 1, 0, 2 * Math.PI);
        this.mainRenderContext.strokeStyle = 'rgba(255, 255, 255, 0.8)'; // White stroke color
        this.mainRenderContext.lineWidth = 1;
        this.mainRenderContext.stroke();

        this.mainRenderContext.beginPath();
        this.mainRenderContext.arc(x, y, radius - 1, 0, 2 * Math.PI);
        this.mainRenderContext.strokeStyle = 'rgba(0, 0, 0, 0.4)'; // Dark stroke color
        this.mainRenderContext.lineWidth = 1;
        this.mainRenderContext.stroke();
    }

    private updateHueSlider($event: MouseEvent): void {
        // Limit the slider within the bounds of the canvas
        const x = $event.offsetX;
        const canvasWidth = this.hueSliderCanvasSize.width;

        // Limit the slider within the bounds of the canvas and store the position
        this.hueSliderPosition = Math.max(0, Math.min(x, canvasWidth));
        this.hue = Math.round((x / canvasWidth) * 360);

        this.drawHueSlider();

        this.pickColor(this.colorPickerCanvasPos.x, this.colorPickerCanvasPos.y);
    }

    private updateAlphaSlider(x: number): void {
        const canvasWidth = this.alphaSliderCanvasSize.width;
        // Limit the slider within the bounds of the canvas and store the position
        this.alphaSliderPosition = Math.max(0, Math.min(x, canvasWidth));
        this.alpha = this.alphaSliderPosition / canvasWidth;
        this.pickColor(this.colorPickerCanvasPos.x, this.colorPickerCanvasPos.y);
    }

    private getHueSliderPositionByColor(color: PxColorFormatRGBA): number {
        const hue = calculateHue(color.r / 255, color.g / 255, color.b / 255);
        this.hue = hue;
        return (hue / 360) * this.hueSliderCanvasSize.width;
    }

    ngOnDestroy(): void {
        if (this.onColorPickedTimeout) {
            clearTimeout(this.onColorPickedTimeout);
        }

        this.removeBoundEvents$.next();
        this.removeBoundEvents$.complete();
    }
}
