import { HttpHeaders } from "@angular/common/http";
import {InjectionToken, TemplateRef} from "@angular/core";
import {Subscription} from "rxjs";

export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] } | Promise<HttpHeaders | {[p: string]: string | string[]}>;
}

export interface PxFile {
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
     * Custom data attached to this file(by default the response body from the save endpoint).
     */
    metaData?: { [key: string]: any };
    /**
     * Allow/Disallow the deletion of this file after upload
     */
    allowDelete?: boolean;
    /**
     * Used internally to store the upload progress percentage
     */
    uploadProgress?: number;
    /**
     * Used internally to store any errors that occurred during the upload
     */
    uploadError?: string;
    /**
     * File to be uploaded
     */
    uploadedFile?: File;
    /**
     * Determines if this file has a recoverable error (temporary loss of connection, server down temporarily, etc.)
     */
    canRetryUpload?: boolean;
    isUploading?: boolean;
    httpSubscription?: Subscription;
}

export interface PxImageSize {
    width?: number;
    height?: number;
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
