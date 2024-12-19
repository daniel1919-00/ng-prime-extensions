import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    Optional,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {PX_UPLOADER_INTL, PxEndpointConfig, PxFile, PxImageSize, PxUploaderIcons, PxUploaderIntl} from "./px-uploader";
import {catchError, of} from "rxjs";
import { HttpClient, HttpEventType } from "@angular/common/http";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {PxFileSizePipe} from "./px-uploader-file-size.pipe";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {ProgressBar} from "primeng/progressbar";
import {Button} from "primeng/button";
import {PrimeNG} from "primeng/config";

@Component({
    selector: 'px-uploader',
    templateUrl: './px-uploader.component.html',
    styleUrl: './px-uploader.component.scss',
    imports: [
        NgClass,
        ProgressBar,
        Button,
        NgTemplateOutlet,
        PxFileSizePipe
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: PxUploaderComponent
        }
    ]
})
export class PxUploaderComponent implements ControlValueAccessor, OnChanges, OnDestroy {
    /**
     * Endpoint that handles the upload.
     */
    @Input({required: true}) saveEndpoint!: PxEndpointConfig;

    /**
     * Endpoint that handles file removal.
     */
    @Input() deleteEndpoint!: PxEndpointConfig;

    /**
     * Uploader label.
     */
    @Input() label: string = '';

    /**
     * Allow multiple files?
     */
    @Input() multiple = false;

    /**
     * Determines how the added files are rendered.
     */
    @Input() displayAs: 'list' | 'grid' = 'list';

    /**
     * A list of allowed file extensions(lowercase), if empty the extension check is skipped.
     * Example: ['txt', 'xlsx', ...]
     */
    @Input() allowedExtensions: string[] = [];

    /**
     * Maximum file size in bytes. Default: 5MB.
     */
    @Input() maxFileSize = 5 * 1024 * 1024;
    /**
     * How many files should we upload in parallel?
     */
    @Input() maxParallelUploads = 5;

    /**
     * Whether to show a preview when the uploaded file is an image.
     */
    @Input() showImagePreview = true;

    /**
     * Limits the maximum width and/or height of uploaded images.
     * Multiple sizes can be added in the array, for example you can
     * check if the uploaded image has a width of 100 by passing [maxImageSize]="[{width: 100}]".
     */
    @Input() maxImageSize?: PxImageSize[];
    /**
     * Overwrite the default icons used.
     */
    @Input() icons?:PxUploaderIcons;
    /**
     * Additional message to be displayed to the user.
     */
    @Input() infoMessage?: string;

    /**
     * Event triggered when all the files in the upload queue are uploaded.
     */
    @Output() uploadFinished = new EventEmitter<PxFile[]>();

    protected _value: PxFile[] = [];
    protected filesQueue: PxFile[] = [];
    protected maxImageSizeText: string = '';
    protected allowedExtensionsText: string = '';
    protected hasFiles = false;
    protected dragoverEventActive = false;
    protected readonly intl: Record<PxUploaderIntl, string>;
    protected readonly PxUploaderIntl = PxUploaderIntl;

    @ViewChild('fileInput')
    private readonly fileInput!: ElementRef;
    private onChange = (value: any) => value;
    private onTouched = () => {};
    private isTouched = false;
    private isAngularFormValue = false;
    private uploadingFilesCount = 0;
    private processingUploadQueue = false;

    constructor(
        private readonly http: HttpClient,
        private readonly changeDetector: ChangeDetectorRef,
        protected primeNGConfig: PrimeNG,
        @Optional() @Inject(PX_UPLOADER_INTL) intl?: Record<PxUploaderIntl, string>,
    ) {
        this.intl = Object.assign({
            [PxUploaderIntl.NO_FILES_MSG]: 'Drag & drop your files or click to browse',
            [PxUploaderIntl.UNKNOWN_ERROR]: 'Upload Failed!',
            [PxUploaderIntl.INVALID_EXTENSION]: 'Invalid file extension!',
            [PxUploaderIntl.MAX_SIZE_EXCEEDED]: 'File size is too big!',
            [PxUploaderIntl.ALLOWED_EXTENSIONS]: 'Allowed Extensions',
            [PxUploaderIntl.MAX_FILE_SIZE]: 'Maximum file size',
            [PxUploaderIntl.IMAGE_SIZE_CHECK_FAILED]: 'Maximum width or height exceeded.',
            [PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]: 'Allowed image dimensions (HxW)',
        }, intl || {});
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['allowedExtensions']) {
            this.allowedExtensionsText = this.allowedExtensions.join(', ');
            !changes['allowedExtensions'].firstChange && this.changeDetector.markForCheck();
        }

        if (changes['maxImageSize'] && this.maxImageSize?.length) {
            this.maxImageSizeText = this.maxImageSize.map(size => size.height + 'x' + size.width).join(', ');
            !changes['maxImageSize'].firstChange && this.changeDetector.markForCheck();
        }

        if(changes['multiple'] && !changes['multiple'].firstChange) {
            this.changeDetector.markForCheck();
        }
    }

    /**
     * Opens the file input dialog.
     */
    openFilesInput() {
        this.fileInput.nativeElement.click()
    }

    get value(): PxFile[] {
        return this._value;
    }

    @Input()
    set value(value: PxFile[] | PxFile) {
        if (!Array.isArray(value)) {
            value = [value];
        }

        this._value = value;
        this.hasFiles = value.length > 0;
        if(!this.isAngularFormValue) {
            this.onChange(value);
            this.onTouched();
        }
        this.changeDetector.markForCheck();
    }

    writeValue(value: any) {
        if(!value) {
            return;
        }
        this.isAngularFormValue = true;
        this.value = value;
        this.isAngularFormValue = false;
    }

    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: any) {
        this.onTouched = () => !this.isTouched && onTouched;
    }

    protected onFilesAdded(addedFiles: FileList) {
        if (!(addedFiles && addedFiles.length)) {
            return;
        }

        if(!this.multiple) {
            this.filesQueue[0]?.httpSubscription?.unsubscribe();
            this.filesQueue = [];
            this.value = [];
            this.changeDetector.markForCheck();
        }

        const files = this.multiple ? addedFiles : [addedFiles[0]];
        for (let i = files.length; i--;) {
            const file: File = files[i];

            this.checkFile(file).then(error => {
                const queuedPxFile: PxFile = {
                    name: file.name,
                    uploadProgress: 0,
                    size: file.size,
                    canRetryUpload: error === '',
                    imagePreviewUrl: file.type.includes('image') ? URL.createObjectURL(file) : '',
                    uploadedFile: file
                };

                if (error !== '') {
                    queuedPxFile.uploadError = error;
                }

                this.filesQueue.push(queuedPxFile);
                this.processUploadQueue().then();
                this.changeDetector.markForCheck();
            });
        }

        this.fileInput.nativeElement.value = '';
    }

    protected async processUploadQueue() {
        if(this.processingUploadQueue || this.uploadingFilesCount === this.maxParallelUploads) {
            return;
        }

        this.processingUploadQueue = true;
        const queuedFiles = this.filesQueue;

        let nextUploadFile: PxFile|null = null;
        const queueLength = queuedFiles.length;
        let fileUploadInProgress = false;
        for(let i = 0; i < queueLength; ++i) {
            const queuedFile = queuedFiles[i];

            if(queuedFile.uploadError) {
                continue;
            }

            if(queuedFile.isUploading) {
                fileUploadInProgress = true;
                continue;
            }

            nextUploadFile = queuedFile;
            break;
        }

        this.processingUploadQueue = false;

        if(nextUploadFile) {
            nextUploadFile.httpSubscription = await this.uploadFile(nextUploadFile);
            if(this.uploadingFilesCount < this.maxParallelUploads) {
                this.processUploadQueue().then();
            }
        } else if(!fileUploadInProgress) {
            this.uploadFinished.emit(this.value);
        }
    }

    protected async uploadFile(queuedPxFile: PxFile) {
        ++this.uploadingFilesCount;
        const formData = new FormData();
        const file = queuedPxFile.uploadedFile as File;
        const saveEndpoint = this.saveEndpoint;
        const headers = saveEndpoint.headers;
        queuedPxFile.isUploading = true;

        formData.append("file", file);

        const requestHeaders = headers instanceof Promise ? await headers : headers;

        return this.http.request(saveEndpoint.requestMethod || 'POST', saveEndpoint.url, {
            reportProgress: true,
            observe: 'events',
            body: formData,
            headers: requestHeaders
        }).pipe(
            catchError(() => {
                queuedPxFile.uploadError = this.intl[PxUploaderIntl.UNKNOWN_ERROR];
                queuedPxFile.isUploading = false;
                delete queuedPxFile.uploadProgress;
                --this.uploadingFilesCount;
                this.changeDetector.markForCheck();
                return of({});
            }),
        ).subscribe((event: any) => {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    queuedPxFile.uploadProgress = Math.floor(event.loaded / (event.total || 1) * 100);
                    this.changeDetector.markForCheck();
                    break;

                case HttpEventType.Response:
                    --this.uploadingFilesCount;
                    if (!this.multiple) {
                        this._value = [];
                    }

                    const uploadedFiles = this._value;
                    uploadedFiles.push({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        imagePreviewUrl: file.type.includes('image') ? URL.createObjectURL(file) : '',
                        metaData: event.body || {}
                    });

                    this.value = uploadedFiles;
                    const uploadQueue = this.filesQueue;
                    const uploadedFileQueueIndex = uploadQueue.indexOf(queuedPxFile);
                    if(uploadedFileQueueIndex > -1) {
                        uploadQueue.splice(uploadedFileQueueIndex, 1);
                    }
                    this.processUploadQueue();
                    break;
            }
        });
    }

    protected retryUpload(queuedFileIndex: number) {
        const queuedFile = this.filesQueue[queuedFileIndex];
        if (queuedFile) {
            delete queuedFile.uploadError;
            this.processUploadQueue().then();
        }
    }

    protected removeFileFromQueue(fileIndex: number) {
        this.filesQueue.splice(fileIndex, 1);
    }

    /**
     * Removes an uploaded file by index
     * @param fileIndex
     */
    protected async removeFile(fileIndex: number) {
        const file = this._value.splice(fileIndex, 1)[0];

        if (this.deleteEndpoint) {
            const deleteEndpoint = this.deleteEndpoint;
            const requestHeaders = deleteEndpoint.headers instanceof Promise ? await deleteEndpoint.headers : deleteEndpoint.headers;
            this.http.request(
                deleteEndpoint.url,
                deleteEndpoint.requestMethod || 'DELETE',
                {
                    body: [file],
                    headers: requestHeaders
                }).subscribe();
        }

        this.hasFiles = this._value.length > 0;
    }

    protected onDragEnter(evt: DragEvent) {
        evt.preventDefault();
        this.dragoverEventActive = true;
    }

    protected onDragover(evt: DragEvent) {
        evt.preventDefault();
        if(!this.dragoverEventActive) {
            this.dragoverEventActive = true;
        }
    }

    protected onDragLeave(evt: DragEvent) {
        evt.preventDefault();
        this.dragoverEventActive = false;
    }

    protected onFilesDropped(evt: DragEvent) {
        evt.preventDefault();

        const files = evt.dataTransfer?.files;
        if (files) {
            this.onFilesAdded(files);
        }

        this.dragoverEventActive = false;
    }

    private async checkFile(file: File): Promise<string> {
        if (file.size > this.maxFileSize) {
            return this.intl[PxUploaderIntl.MAX_SIZE_EXCEEDED];
        }

        const allowedExtensions = this.allowedExtensions;
        if (allowedExtensions.length) {
            const dotIndex = file.name.lastIndexOf('.');
            // File extension valid?
            if (!( ( dotIndex > 0 ) && ( allowedExtensions.indexOf(file.name.substring(dotIndex + 1).toLowerCase()) !== -1 ) )) {
                return this.intl[PxUploaderIntl.INVALID_EXTENSION];
            }
        }

        if (file.type.includes('image') && this.maxImageSize?.length) {
            const maxImageSize = this.maxImageSize;
            const imageSizes = await this.getImageSize(URL.createObjectURL(file));

            let checkFail = true;
            for (let i = maxImageSize.length; i--;) {
                const sizeCheck = maxImageSize[i];

                if (
                    (sizeCheck.width !== undefined && sizeCheck.height !== undefined)
                    && sizeCheck.width === imageSizes.width
                    && sizeCheck.height === imageSizes.height
                ) {
                    checkFail = false;
                    break;
                } else if (sizeCheck.width !== undefined && sizeCheck.height === undefined && sizeCheck.width === imageSizes.width) {
                    checkFail = false;
                    break;
                } else if (sizeCheck.height !== undefined && sizeCheck.width === undefined && sizeCheck.height === imageSizes.height) {
                    checkFail = false;
                    break;
                }
            }

            if (checkFail) {
                return this.intl[PxUploaderIntl.IMAGE_SIZE_CHECK_FAILED];
            }
        }

        return '';
    }

    private async getImageSize(url: string): Promise<{ width: number; height: number; }> {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                resolve({
                    width: img.width,
                    height: img.height
                });
            };

            img.onerror = () => {
                reject('Error loading image');
            };

            img.src = url;
        });
    }

    ngOnDestroy() {
        this.uploadFinished.complete();
    }
}
