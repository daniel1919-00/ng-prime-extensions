import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse } from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {timeoutAsync} from "./shared";
import {
    PxTableDataRequestInfo,
    PxTableDataResponse,
    PxTableRow,
    PxTableSortedColumn
} from "../../projects/px-table/src/lib/px-table";

const UPLOAD_SPEED_BYTES = 100 * 1024;

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleRequest(req, next);
    }

    private handleRequest(req: HttpRequest<any>, next: HttpHandler) {
        const requestedEndpoint = req.url.replace('https://localhost/', '').split('/');
        switch (requestedEndpoint[0]) {
            case 'table': return this.getTableResponse(req);
            case 'px-uploader': return this.getUploaderResponse(req);
            default: return next.handle(req);
        }
    }

    private getTableResponse(request: HttpRequest<any>) {
        let pageLen: number, sortCol: string, sortDir: string;
        const requestBody: PxTableDataRequestInfo = request.body;
        pageLen = requestBody.pageLength;
        const sortedCol: PxTableSortedColumn = requestBody.sortedColumns ? requestBody.sortedColumns[0] : {columnId: '', order: 0};
        sortCol = sortedCol.columnId;
        sortDir = sortedCol.order ? (sortedCol.order > 0 ? 'asc' : 'desc') : '';
        const data: PxTableRow[] = [];
        const maxResults = 100;
        let startRow = requestBody.firstRowIndex;
        let endRow = startRow + pageLen;
        if (endRow > maxResults) {
            endRow = maxResults;
        }

        const date = new Date();
        for (let i = 0; i < maxResults; ++i) {
            date.setDate(date.getDate() + 1);
            data.push({
                column1: i + 1,
                column2: i + 2,
                column3: date.toUTCString(),
                column4: i + 4,
                pxDisableSelection: i % 2 === 0
            });
        }
        if (sortCol !== '') {

            let sortOrderAHigher = 1;
            let sortOrderALower = -1;

            if (sortDir === 'desc') {
                sortOrderAHigher = -1;
                sortOrderALower = 1;
            }

            data.sort((a: any, b: any) => {
                const colValA = a[sortCol];
                const colValB = b[sortCol];

                if (colValA > colValB) return sortOrderAHigher;
                if (colValA < colValB) return sortOrderALower;

                return 0;
            });
        }
        return new Observable<HttpEvent<any>>(observer => {
            timeoutAsync(2000).then(() => {
                observer.next(new HttpResponse({
                    status: 200,
                    body: {
                        totalRecords: maxResults,
                        records: data.slice(startRow, endRow)
                    } as PxTableDataResponse
                }));

                observer.complete();
            });
        });
    }

    private getUploaderResponse(req: HttpRequest<any>) {
        const file = (req.body as FormData).get('file') as File;
        const totalFileSize = file.size;
        let uploadedSize = 0;
        let interval: any = null;

        return new Observable<HttpEvent<any>>(observer => {
            observer.next({type: HttpEventType.Sent});

            interval = setInterval(() => {
                uploadedSize += UPLOAD_SPEED_BYTES;

                if (uploadedSize >= totalFileSize) {
                    clearInterval(interval);
                    interval = null;
                    observer.next(new HttpResponse({
                        status: 201
                    }));
                    observer.complete();
                    return;
                }

                observer.next({
                    type: HttpEventType.UploadProgress,
                    loaded: uploadedSize,
                    total: totalFileSize
                } as HttpProgressEvent);
            }, 1000);
        });
    }
}
