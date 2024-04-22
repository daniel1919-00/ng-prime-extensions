import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    Output,
    ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ColorPickerModule} from "primeng/colorpicker";
import {DOCUMENT, NgIf, NgStyle, NgTemplateOutlet} from "@angular/common";
import {fromEvent, Subject, takeUntil} from "rxjs";
import {
    PxCanvasSize,
    PxColor,
    PxColorFormat,
    PxColorFormatHEX,
    PxColorFormatHSL,
    PxColorFormatRGBA
} from "./px-color-picker";
import {calculateHue, calculateSaturation, convertColor} from "./utilities";

@Component({
    selector: 'px-color-picker',
    standalone: true,
    imports: [
        ColorPickerModule,
        FormsModule,
        NgTemplateOutlet,
        NgStyle,
        NgIf
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
export class PxColorPickerComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    @Input() format: PxColorFormat = 'hex';
    @Input() disabled: boolean = false;
    @Input() inline: boolean = false;
    /**
     * Disabled when using hex color format
     */
    @Input() disableAlpha: boolean = false;
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

    @ViewChild('pxColorPickerCanvas') private pxColorPickerCanvas!: ElementRef;
    @ViewChild('pxColorPickerHueCanvas') private pxColorPickerHueCanvas!: ElementRef;
    @ViewChild('pxColorPickerAlphaCanvas') private pxColorPickerAlphaCanvas?: ElementRef;
    @ViewChild('pxColorPickerColorPreview') private pxColorPickerColorPreview!: ElementRef;

    private mainRenderContext!: CanvasRenderingContext2D;
    private hueRenderContext!: CanvasRenderingContext2D;
    private alphaRenderContext?: CanvasRenderingContext2D;
    private draggingColorPicker: boolean = false;
    private draggingHueSlider: boolean = false;
    private draggingAlphaSlider: boolean = false;
    private hueSliderPosition: number = 0;
    private alphaSliderPosition: number = 0;
    private hue: number = 0;
    private alpha: number = 1;
    private lastColorTargetPos: { x: number; y: number } = {
        x: 0,
        y: 0
    };
    private onChange = (value: any) => value;
    private onTouched = () => {
    };
    private touched = false;
    private valueRGBA: PxColorFormatRGBA = {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };
    private _value: PxColorFormatHSL | PxColorFormatRGBA | PxColorFormatHEX | null = null;
    private incomingAngularFormValue = false;
    private onColorPickedTimeout: any = null;
    private componentDestroyed: Subject<void> = new Subject();

    constructor(
        private changeDetector: ChangeDetectorRef,
        private ngZone: NgZone,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngAfterViewInit() {
        this.changeDetector.detach();

        if(this.format === 'hex') {
            this.disableAlpha = true;
        }

        const pxColorPickerCanvasEl = this.pxColorPickerCanvas.nativeElement;
        this.mainRenderContext = pxColorPickerCanvasEl.getContext('2d', {willReadFrequently: true});

        const pxColorPickerHueCanvas = this.pxColorPickerHueCanvas.nativeElement;
        this.hueRenderContext = pxColorPickerHueCanvas.getContext('2d', {willReadFrequently: true});

        const pxColorPickerAlphaCanvas = this.pxColorPickerAlphaCanvas?.nativeElement;
        this.alphaRenderContext = pxColorPickerAlphaCanvas?.getContext('2d', {willReadFrequently: true});

        this.drawAll();

        this.ngZone.runOutsideAngular(() => {
            // This is to fix a weird bug, where leaving tab/window focus would clear the canvas context permanently.
            fromEvent(window, 'focus').pipe(takeUntil(this.componentDestroyed)).subscribe(() => this.drawAll());

            fromEvent(pxColorPickerCanvasEl, 'mousedown')
                .pipe(takeUntil(this.componentDestroyed))
                .subscribe($event => {
                    if (this.disabled) return;
                    this.draggingColorPicker = true;
                    this.pickColor(($event as MouseEvent).offsetX, ($event as MouseEvent).offsetY);
                });

            fromEvent(pxColorPickerCanvasEl, 'mousemove')
                .pipe(takeUntil(this.componentDestroyed))
                .subscribe($event => this.draggingColorPicker && this.pickColor(($event as MouseEvent).offsetX, ($event as MouseEvent).offsetY));

            fromEvent(pxColorPickerHueCanvas, 'mousedown')
                .pipe(takeUntil(this.componentDestroyed))
                .subscribe($event => {
                    if (this.disabled) return;
                    this.draggingHueSlider = true;
                    this.updateHueSlider($event as MouseEvent);
                });

            fromEvent(pxColorPickerHueCanvas, 'mousemove')
                .pipe(takeUntil(this.componentDestroyed))
                .subscribe($event => this.draggingHueSlider && this.updateHueSlider($event as MouseEvent));

            if(pxColorPickerAlphaCanvas) {
                fromEvent(pxColorPickerAlphaCanvas, 'mousedown')
                    .pipe(takeUntil(this.componentDestroyed))
                    .subscribe($event => {
                        if (this.disabled) return;
                        this.draggingAlphaSlider = true;
                        this.updateAlphaSlider(($event as MouseEvent).offsetX);
                    });

                fromEvent(pxColorPickerAlphaCanvas, 'mousemove')
                    .pipe(takeUntil(this.componentDestroyed))
                    .subscribe($event => this.draggingAlphaSlider && this.updateAlphaSlider(($event as MouseEvent).offsetX));
            }

            fromEvent(this.document, 'mouseup').pipe(takeUntil(this.componentDestroyed))
                .subscribe(() => {
                    this.draggingHueSlider = false;
                    this.draggingAlphaSlider = false;
                    this.draggingColorPicker = false;
                });
        });
    }

    getValueAs<T = any>(format: PxColorFormat): T {
        return convertColor<T>(this.valueRGBA, format);
    }

    get value() {
        return this._value;
    }

    @Input()
    set value(val: PxColor | null) {
        this._value = val;
        if (val) {
            const rgbaVal = convertColor<PxColorFormatRGBA>(val, 'rgba');
            this.valueRGBA = rgbaVal;
            this.hueSliderPosition = this.getHueSliderPositionByColor(rgbaVal);
            this.lastColorTargetPos = {
                x: (this.hue / 360) * this.mainCanvasSize.width,
                y: (1 - calculateSaturation(rgbaVal)) * this.mainCanvasSize.height
            };

            if(this.mainRenderContext) {
                this.drawHueSlider();
                this.pickColor(this.lastColorTargetPos.x, this.lastColorTargetPos.y);
            }
        }
        if (!this.incomingAngularFormValue) {
            this.onTouched();
            this.onChange(val);
            this.valueChange.next(val);
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
        this.incomingAngularFormValue = true;
        this.value = val;
        this.incomingAngularFormValue = false;
    }

    private drawAll() {
        this.drawHueSlider();
        this.drawAlphaSlider();
        this.drawColorPicker();
        this.drawColorPickerCircle(this.lastColorTargetPos.x, this.lastColorTargetPos.y);
        const rgba = this.valueRGBA;
        (this.pxColorPickerColorPreview.nativeElement as HTMLDivElement).style.background = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
    }

    private drawColorPicker(): void {
        const gradient = this.mainRenderContext.createLinearGradient(0, 0, this.mainCanvasSize.width, this.mainCanvasSize.height);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, `hsl(${this.hue}, 100%, 50%)`);
        gradient.addColorStop(1, 'black');

        this.mainRenderContext.fillStyle = gradient;
        this.mainRenderContext.fillRect(0, 0, this.mainCanvasSize.width, this.mainCanvasSize.height);
    }

    private drawHueSlider(): void {
        const hueRenderContext = this.hueRenderContext;
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

        if(!this.hueSliderPosition) {
            this.hueSliderPosition = this._value ? this.getHueSliderPositionByColor(convertColor<PxColorFormatRGBA>(this._value, 'rgba')) : 3;
        }

        this.drawSliderHandle(hueRenderContext, this.hueSliderPosition);
    }

    private drawAlphaSlider(): void {
        const alphaRenderContext = this.alphaRenderContext;
        if(!alphaRenderContext) {
            return;
        }

        alphaRenderContext.clearRect(0, 0, alphaRenderContext.canvas.width, alphaRenderContext.canvas.height);
        const gradient = alphaRenderContext.createLinearGradient(0, 0, alphaRenderContext.canvas.width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');

        const currentColor = this.valueRGBA;
        gradient.addColorStop(1, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 1)`);

        alphaRenderContext.fillStyle = gradient;
        alphaRenderContext.fillRect(0, 0, alphaRenderContext.canvas.width, alphaRenderContext.canvas.height);

        if (this.alphaSliderPosition === 0) {
            this.alphaSliderPosition = this.alpha * alphaRenderContext.canvas.width;
        }

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

    private pickColor(x: number, y: number): void {
        this.lastColorTargetPos = {x, y};
        this.mainRenderContext.clearRect(0, 0, this.mainCanvasSize.width, this.mainCanvasSize.height);
        this.drawColorPicker();

        // Render the cursor color "target" circle
        this.drawColorPickerCircle(x, y);

        const imageData = this.mainRenderContext.getImageData(x, y, 1, 1).data;
        const rgba = {r: imageData[0], g: imageData[1], b: imageData[2], a: this.alpha};
        this.valueRGBA = rgba;
        (this.pxColorPickerColorPreview.nativeElement as HTMLDivElement).style.background = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

        this.drawAlphaSlider();

        // Prevent event spam
        if (this.onColorPickedTimeout) {
            clearTimeout(this.onColorPickedTimeout);
        }

        this.onColorPickedTimeout = setTimeout(() => {
            this.onColorPickedTimeout = null;

            const selectedColor = this.getValueAs(this.format);
            this._value = selectedColor;

            this.ngZone.run(() => {
                this.onTouched();
                this.onChange(selectedColor);
                this.valueChange.next(selectedColor);
            });
        }, 200);
    }

    private drawColorPickerCircle(x: number, y: number) {
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

        this.pickColor(this.lastColorTargetPos.x, this.lastColorTargetPos.y);
    }

    private updateAlphaSlider(x: number): void {
        const canvasWidth = this.alphaSliderCanvasSize.width;
        // Limit the slider within the bounds of the canvas and store the position
        this.alphaSliderPosition = Math.max(0, Math.min(x, canvasWidth));
        this.alpha = this.alphaSliderPosition / canvasWidth;
        this.pickColor(this.lastColorTargetPos.x, this.lastColorTargetPos.y);
    }

    private getHueSliderPositionByColor(color: PxColorFormatRGBA): number {
        const hue = calculateHue(color);
        this.hue = hue;
        return (hue / 360) * this.hueSliderCanvasSize.width;
    }

    ngOnDestroy(): void {
        if (this.onColorPickedTimeout) {
            clearTimeout(this.onColorPickedTimeout);
        }
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    }
}
