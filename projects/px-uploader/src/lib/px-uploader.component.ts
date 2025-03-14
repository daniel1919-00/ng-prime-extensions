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
import {
    PX_UPLOADER_INTL,
    PxEndpointConfig,
    PxFile,
    PxImageSize,
    PxUploaderButtons,
    PxUploaderIcons,
    PxUploaderIntl
} from "./px-uploader";
import {catchError, of} from "rxjs";
import {HttpClient, HttpEventType} from "@angular/common/http";
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
export class PxUploaderComponent implements ControlValueAccessor, OnChanges, OnDestroy
{
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
     * For example, you can check if the uploaded image has a width of exactly 100
     * by passing [maxImageSize]="{width: 100, strict: true}" or just limit the maximum by removing the 'strict' property.
     */
    @Input() maxImageSize?: PxImageSize;
    /**
     * Overwrite the default icons used.
     */
    @Input() icons?: PxUploaderIcons;
    /**
     * Overwrite the default buttons used.
     */
    @Input() buttons?: PxUploaderButtons;
    /**
     * Additional message to be displayed to the user.
     */
    @Input() infoMessage?: string;
    /**
     * Displays the file name
     */
    @Input() showFileName = true;
    /**
     * Displays the file size in human-readable form
     */
    @Input() showFileSize = true;
    /**
     * If the file is an image, displays the image height and width
     */
    @Input() showImageSize = true;
    /**
     * Event triggered when all the files in the upload queue are uploaded.
     */
    @Output() uploadFinished = new EventEmitter<null | PxFile | PxFile[]>();

    protected _value: PxFile[] = [];
    protected filesQueue: PxFile[] = [];
    protected maxImageSizeText: string = '';
    protected allowedExtensionsText: string = '';
    protected hasFiles = false;
    protected dragoverEventActive = false;
    protected readonly intl: Record<PxUploaderIntl, string>;
    protected readonly PxUploaderIntl = PxUploaderIntl;
    protected _disabled: boolean = false;

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
    )
    {
        this.intl = Object.assign({
            [PxUploaderIntl.NO_FILES_MSG]: 'Drag & drop your files or click to browse',
            [PxUploaderIntl.UNKNOWN_ERROR]: 'Upload Failed!',
            [PxUploaderIntl.INVALID_EXTENSION]: 'Invalid file extension!',
            [PxUploaderIntl.MAX_SIZE_EXCEEDED]: 'File size is too big!',
            [PxUploaderIntl.ALLOWED_EXTENSIONS]: 'Allowed Extensions',
            [PxUploaderIntl.MAX_FILE_SIZE]: 'Maximum file size',
            [PxUploaderIntl.IMAGE_SIZE_CHECK_FAILED]: 'Maximum image width or height exceeded.',
            [PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]: 'Allowed image dimensions (HxW)',
        }, intl || {});
    }

    ngOnChanges(changes: SimpleChanges)
    {
        if (changes['allowedExtensions'])
        {
            this.allowedExtensionsText = this.allowedExtensions.join(', ');
            !changes['allowedExtensions'].firstChange && this.changeDetector.detectChanges();
        }

        if (changes['maxImageSize'])
        {
            const maxImageSize = this.maxImageSize;
            this.maxImageSizeText = (maxImageSize?.height || '') + 'x' + (maxImageSize?.width || '');
            !changes['maxImageSize'].firstChange && this.changeDetector.detectChanges();
        }

        if (changes['multiple'] && !changes['multiple'].firstChange)
        {
            this.changeDetector.detectChanges();
        }

        if (changes['buttons'] && !changes['buttons'].firstChange)
        {
            this.changeDetector.detectChanges();
        }
    }

    /**
     * Opens the file input dialog.
     */
    openFilesInput()
    {
        this.fileInput.nativeElement.click()
    }

    /**
     * Will always be null if there are no files (regardless of multiple attribute)
     */
    get value(): null | PxFile | PxFile[]
    {
        if (this.multiple)
        {
            return this._value.length ? this._value : null;
        }

        return this._value[0] || null;
    }

    @Input()
    set value(value: PxFile[] | PxFile | null)
    {
        if (value === null)
        {
            this._value = [];
            value = [];
        }
        else
        {
            if (!Array.isArray(value))
            {
                value = [value];
            }
            else if (!this.multiple && value.length)
            {
                value = [value[0]];
            }

            this._value = value;
        }

        this.hasFiles = value.length > 0;
        if (!this.isAngularFormValue)
        {
            this.onChange(this.value);
            this.onTouched();
        }
        this.changeDetector.detectChanges();
    }

    get disabled(): boolean
    {
        return this._disabled;
    }

    @Input()
    set disabled(state: boolean)
    {
        this._disabled = state;
    }

    setDisabledState(isDisabled: boolean)
    {
        this.disabled = isDisabled;
    }

    writeValue(value: any)
    {
        if (!value)
        {
            return;
        }
        this.isAngularFormValue = true;
        this.value = value;
        this.isAngularFormValue = false;
    }

    registerOnChange(onChange: any)
    {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: any)
    {
        this.onTouched = () => !this.isTouched && onTouched;
    }

    protected onFilesAdded(addedFiles: FileList)
    {
        if (!(addedFiles && addedFiles.length))
        {
            return;
        }

        if (!this.multiple)
        {
            this.filesQueue[0]?._internal!.httpSubscription?.unsubscribe();
            this.filesQueue = [];
            this._value = [];
            this.changeDetector.detectChanges();
        }

        const files = this.multiple ? addedFiles : [addedFiles[0]];
        for (let i = files.length; i--;)
        {
            const file: File = files[i];

            this.checkFile(file).then(pxFile =>
            {
                this.filesQueue.push(pxFile);
                this.processUploadQueue().then();
                this.changeDetector.detectChanges();
            });
        }

        this.fileInput.nativeElement.value = '';
    }

    protected async processUploadQueue()
    {
        if (this.processingUploadQueue || this.uploadingFilesCount === this.maxParallelUploads)
        {
            return;
        }

        this.processingUploadQueue = true;

        const queuedFiles = this.filesQueue;
        const queueLength = queuedFiles.length;
        let nextUploadFile: PxFile | null = null;
        let fileUploadInProgress = false;

        for (let i = 0; i < queueLength; ++i)
        {
            const queuedFile = queuedFiles[i];

            if (queuedFile._internal!.uploadError)
            {
                continue;
            }

            if (queuedFile._internal!.isUploading)
            {
                fileUploadInProgress = true;
                continue;
            }

            nextUploadFile = queuedFile;
            break;
        }

        this.processingUploadQueue = false;

        if (nextUploadFile)
        {
            this.uploadFile(nextUploadFile).then((sub) =>
            {
                nextUploadFile._internal!.httpSubscription = sub;
                if (this.uploadingFilesCount < this.maxParallelUploads)
                {
                    this.processUploadQueue().then();
                }
            });
        }
        else if (!fileUploadInProgress)
        {
            this.uploadFinished.emit(this.value);
        }
    }

    protected async uploadFile(queuedPxFile: PxFile)
    {
        ++this.uploadingFilesCount;
        const formData = new FormData();
        const file = queuedPxFile._internal!.uploadedFile as File;
        const saveEndpoint = this.saveEndpoint;
        const headers = saveEndpoint.headers;
        queuedPxFile._internal!.isUploading = true;

        formData.append("file", file);

        const requestHeaders = headers instanceof Promise ? await headers : headers;

        return this.http.request(saveEndpoint.requestMethod || 'POST', saveEndpoint.url, {
            reportProgress: true,
            observe: 'events',
            body: formData,
            headers: requestHeaders
        }).pipe(
            catchError(() =>
            {
                queuedPxFile._internal!.uploadError = this.intl[PxUploaderIntl.UNKNOWN_ERROR];
                queuedPxFile._internal!.isUploading = false;
                delete queuedPxFile._internal!.uploadProgress;
                --this.uploadingFilesCount;
                this.changeDetector.detectChanges();
                return of({});
            }),
        ).subscribe((event: any) =>
        {
            switch (event.type)
            {
                case HttpEventType.UploadProgress:
                    let progress = Math.floor(event.loaded / (event.total || 1) * 100);
                    if(progress > 100)
                    {
                        progress = 100;
                    }
                    queuedPxFile._internal!.uploadProgress = progress;
                    this.changeDetector.detectChanges();
                    break;

                case HttpEventType.Response:
                    --this.uploadingFilesCount;
                    if (!this.multiple)
                    {
                        this._value = [];
                    }

                    const uploadedFiles = this._value;
                    const uploadQueue = this.filesQueue;

                    const uploadedFileQueueIndex = uploadQueue.indexOf(queuedPxFile);
                    if (uploadedFileQueueIndex > -1)
                    {
                        uploadQueue.splice(uploadedFileQueueIndex, 1);
                    }

                    queuedPxFile.metaData = event.body || {};
                    delete queuedPxFile._internal;
                    uploadedFiles.push(queuedPxFile);

                    this.value = uploadedFiles;

                    this.processUploadQueue();
                    break;
            }
        });
    }

    protected retryUpload(queuedFileIndex: number, getFnRef: boolean)
    {
        const fn = () =>
        {
            const queuedFile = this.filesQueue[queuedFileIndex];
            if (queuedFile)
            {
                delete queuedFile._internal!.uploadError;
                this.processUploadQueue().then();
            }
        };

        return getFnRef ? fn : fn();
    }

    protected removeFileFromQueue(fileIndex: number)
    {
        this.filesQueue.splice(fileIndex, 1);
    }

    /**
     * Removes an uploaded file by index
     * @param fileIndex
     */
    protected async removeFile(fileIndex: number)
    {
        const file = this._value.splice(fileIndex, 1)[0];
        this.value = this._value;

        if (this.deleteEndpoint)
        {
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
    }

    protected onDragEnter(evt: DragEvent)
    {
        evt.preventDefault();
        this.dragoverEventActive = true;
    }

    protected onDragover(evt: DragEvent)
    {
        evt.preventDefault();
        if (!this.dragoverEventActive)
        {
            this.dragoverEventActive = true;
        }
    }

    protected onDragLeave(evt: DragEvent)
    {
        evt.preventDefault();
        this.dragoverEventActive = false;
    }

    protected onFilesDropped(evt: DragEvent)
    {
        evt.preventDefault();

        const files = evt.dataTransfer?.files;
        if (files)
        {
            this.onFilesAdded(files);
        }

        this.dragoverEventActive = false;
    }

    protected getRemoveFileFn(isQueued: boolean, fileIndex: number, getRef: boolean)
    {
        const fn = () =>
        {
            isQueued ? this.removeFileFromQueue(fileIndex) : this.removeFile(fileIndex);
        }

        return getRef ? fn : fn();
    }

    private async checkFile(file: File): Promise<PxFile>
    {
        const pxFile: PxFile = {
            name: file.name,
            size: file.size,
            type: file.type,
            _internal: {
                canRetryUpload: true,
                isUploading: false,
                uploadedFile: file,
                uploadProgress: 0,
            }
        };

        if (file.size > this.maxFileSize)
        {
            return this.setPxFileError(PxUploaderIntl.MAX_SIZE_EXCEEDED, pxFile);
        }

        const allowedExtensions = this.allowedExtensions;
        if (allowedExtensions.length)
        {
            const dotIndex = file.name.lastIndexOf('.');
            // File extension valid?
            if (!((dotIndex > 0) && (allowedExtensions.indexOf(file.name.substring(dotIndex + 1).toLowerCase()) !== -1)))
            {
                return this.setPxFileError(PxUploaderIntl.INVALID_EXTENSION, pxFile);
            }
        }

        if (file.type.includes('image'))
        {
            const imageDetails = await this.getImageDetails(file);
            pxFile.imagePreviewUrl = imageDetails.previewUrl;
            pxFile.imageSize = {
                width: imageDetails.width,
                height: imageDetails.height,
            };

            if(!this.checkImage(pxFile))
            {
                return pxFile;
            }
        }

        return pxFile;
    }

    private checkImage(pxFile: PxFile): boolean
    {
        if (this.maxImageSize)
        {
            const imageHeight = pxFile.imageSize?.height || 0;
            const imageWidth = pxFile.imageSize?.width || 0;
            const maxImageSize = this.maxImageSize;

            let imageCheckFail = false;

            if (maxImageSize.width !== undefined && maxImageSize.height !== undefined)
            {
                if(maxImageSize.strict)
                {
                    imageCheckFail = maxImageSize.height !== imageHeight || maxImageSize.width !== imageWidth;
                }
                else
                {
                    imageCheckFail = maxImageSize.height > imageHeight || maxImageSize.width > imageWidth;
                }
            }
            else if (maxImageSize.width !== undefined)
            {
                if(maxImageSize.strict)
                {
                    imageCheckFail = maxImageSize.width !== imageWidth;
                }
                else
                {
                    imageCheckFail = maxImageSize.width > imageWidth;
                }
            }
            else if(maxImageSize.height !== undefined)
            {
                if(maxImageSize.strict)
                {
                    imageCheckFail = maxImageSize.height !== imageHeight;
                }
                else
                {
                    imageCheckFail = maxImageSize.height > imageHeight;
                }
            }

            if (imageCheckFail)
            {
                this.setPxFileError(PxUploaderIntl.IMAGE_SIZE_CHECK_FAILED, pxFile);
            }
        }

        return true;
    }

    private setPxFileError(errorKey: PxUploaderIntl, pxFile: PxFile)
    {
        const internalProps = pxFile._internal;
        internalProps!.canRetryUpload = false;
        internalProps!.uploadError = this.intl[errorKey];
        return pxFile;
    }

    private getImageDetails(file: File): Promise<{ width: number; height: number; previewUrl: string; }>
    {
        return new Promise((resolve) =>
        {
            createImageBitmap(file).then(bitmap =>
            {
                resolve({
                    width: bitmap.width,
                    height: bitmap.height,
                    previewUrl: URL.createObjectURL(file)
                });
            }).catch(() =>
            {
                resolve({
                    width: 0,
                    height: 0,
                    previewUrl: ''
                });
            });
        });
    }

    ngOnDestroy()
    {
        this.uploadFinished.complete();
    }
}
