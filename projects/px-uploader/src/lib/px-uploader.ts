import { HttpHeaders } from "@angular/common/http";
import {InjectionToken, TemplateRef} from "@angular/core";
import {Subscription} from "rxjs";

export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] } | Promise<HttpHeaders | {[p: string]: string | string[]}>;
}

export interface PxFile<T = any> {
    name: string;
    /**
     * bytes
     */
    size?: number;
    /**
     * A string containing the file's MIME type, or an empty string if the type could not be determined.
     */
    type?: string;
    imagePreviewUrl?: string;
    /**
     * Always set if the uploaded file is an image
     */
    imageSize?: {height: number; width: number};
    /**
     * Custom data attached to this file(by default the response body from the save endpoint).
     */
    metaData?: T;
    /**
     * Allow/Disallow the deletion of this file after upload
     */
    allowDelete?: boolean;
    /**
     * Used internally
     */
    _internal?: {
        /**
         * Determines if this file has a recoverable error (temporary loss of connection, server down temporarily, etc.)
         */
        canRetryUpload?: boolean;
        isUploading?: boolean;
        /**
         * File to be uploaded
         */
        uploadedFile?: File;
        uploadError?: string;
        httpSubscription?: Subscription;
        uploadProgress?: number;
    }
}

export interface PxImageSize {
    width?: number;
    height?: number;
    /**
     * Whether the image should have these exact sizes
     */
    strict?: boolean;
}

export enum PxUploaderIntl {
    NO_FILES_MSG,
    UNKNOWN_ERROR,
    INVALID_EXTENSION,
    MAX_SIZE_EXCEEDED,
    ALLOWED_EXTENSIONS,
    MAX_FILE_SIZE,
    IMAGE_SIZE_CHECK_FAILED,
    IMAGE_SIZE_CHECK_TEXT
}

export const PX_UPLOADER_INTL = new InjectionToken<Record<PxUploaderIntl, string>>('px-uploader i18n strings');

export interface PxUploaderIcons {
    retryUploadButton?: string;
    removeFileButton?: string;
    uploadButton?: string;
    fileStatusIconUploading?: string;
    fileStatusIconError?: string;
    fileStatusIconQueued?: string;
}

export interface PxUploaderButtons {
    removeFileButton?: TemplateRef<any>,
    retryUploadButton?: TemplateRef<any>
}
