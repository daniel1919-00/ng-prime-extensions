import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {from, lastValueFrom, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {timeoutAsync} from "./shared";
import {PxTableDataResponse, PxTableSortedColum} from "../../projects/px-table/src/lib/px-table";

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handleRequest(req, next));
    }

    private async handleRequest(req: HttpRequest<any>, next: HttpHandler) {
        const requestedEndpoint = req.url.replace('https://localhost/', '').split('/');
        switch (requestedEndpoint[0]) {
            case 'table':
                return await this.getTableResponse(req);
            default:
                return await lastValueFrom(next.handle(req));
        }
    }

    private async getTableResponse(request: HttpRequest<any>) {
        let pageIndex: number, pageLen: number, sortCol: string, sortDir: string;
        const requestBody = request.body;
        pageIndex = requestBody.pageIndex;
        pageLen = requestBody.pageLen;
        const sortedCol: PxTableSortedColum = requestBody.sortedColumns ? requestBody.sortedColumns[0] : {};
        sortCol = sortedCol.columnId;
        sortDir = sortedCol.order ? (sortedCol.order > 0 ? 'asc' : 'desc') : '';
        const data = [];
        const maxResults = 100;
        let startRow = pageIndex * pageLen;
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

        await timeoutAsync(2000);
        return new HttpResponse({
            status: 200,
            body: {
                totalRecords: maxResults,
                records: data.slice(startRow, endRow)
            } as PxTableDataResponse
        });
    }
}
