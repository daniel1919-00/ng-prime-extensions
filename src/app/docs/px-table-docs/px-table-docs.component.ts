import {Component, Inject, OnDestroy, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {PxTableComponent} from "../../../../projects/px-table/src/lib/px-table.component";
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {pxTableCodeExample} from "./code-example";
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {
    PX_TABLE_RENDER_COMPONENT_DATA,
    PxTableColumnDefinition, PxTableColumnVisibility, PxTableDataRequestInfo, PxTableDataResponse,
    PxTableRenderComponentData, PxTableRow
} from "../../../../projects/px-table/src/lib/px-table";
import {DatePipe, JsonPipe} from "@angular/common";
import {Subject, takeUntil} from "rxjs";
import {MultiSelectModule} from "primeng/multiselect";
import {FloatLabelModule} from "primeng/floatlabel";
import {DropdownModule} from "primeng/dropdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TieredMenuModule} from "primeng/tieredmenu";
import {MenuItem} from "primeng/api";

@Component({
    standalone: true,
    template: `
        Rendering image id <strong>{{ columnData.columnData }}</strong> from <a href="https://picsum.photos/images">Lorem
            Picsum</a>.
        <br>
        <img [src]="'https://picsum.photos/id/'+columnData.columnData+'/100'" style="max-width: 100px" alt="Pic">
    `
})
class MyColumnRenderer {
    constructor(
        @Inject(PX_TABLE_RENDER_COMPONENT_DATA) protected columnData: PxTableRenderComponentData
    ) {
    }
}

@Component({
    selector: 'app-px-table',
    standalone: true,
    imports: [
        CardModule,
        PxTableComponent,
        LibraryDocumentationComponent,
        CodeExampleComponent,
        ReactiveFormsModule,
        MultiSelectModule,
        FloatLabelModule,
        DropdownModule,
        HttpClientModule,
        TieredMenuModule,
        JsonPipe
    ],
    providers: [
        DatePipe
    ],
    templateUrl: './px-table-docs.component.html',
    styleUrl: './px-table-docs.component.scss'
})
export class PxTableDocsComponent implements OnDestroy {
    @ViewChild('table') private table!: PxTableComponent;
    form: UntypedFormGroup;
    tableColumns: PxTableColumnDefinition[] = [
        {id: 'column1', name: 'Column 1', sortable: true},
        {id: 'column2', name: 'Column 2', sortable: true},
        {id: 'column3', name: 'date pipe rendered column', sortable: true, renderUsing: {pipe: DatePipe}},
        {id: 'column4', name: 'component rendered column', sortable: true, renderUsing: {component: MyColumnRenderer}},
    ];

    tableStaticDataSrc: { [key: string]: any }[] = [];
    contextualMenuItems: MenuItem[] = [
        {
            label: 'File',
            icon: 'pi pi-file',
            visible: false,
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];

    protected contextMenuSelection?: PxTableRow;

    tableServerSideDataSrc = (requestInfo: PxTableDataRequestInfo) => {
        return this.http.post<PxTableDataResponse>('https://localhost/table', {
            pageIndex: requestInfo.pageIndex,
            pageLen: requestInfo.pageLength,
            sortedColumns: requestInfo.sortedColumns,
            filters: requestInfo.filters
        });
    };

    rowContextMenuIsVisibleFn = (row: any) => {
        const displayCond = this.form.get(['config', 'rowContextMenuIsVisibleFn'])?.value;
        if (displayCond === 'all') {
            return true;
        }

        return displayCond === 'even' ? row['column1'] % 2 === 0 : row['column1'] % 2 !== 0;
    }

    protected readonly pxTableCodeExample = pxTableCodeExample;

    private componentDestroyed$ = new Subject<void>();

    constructor(
        fb: UntypedFormBuilder,
        public http: HttpClient
    ) {
        this.form = fb.group({
            config: fb.group({
                tableColumns: [this.tableColumns.map(c => c.id)],
                dataSource: ['static'],
                rowContextMenuItems: ['1'],
                rowContextMenuIsVisibleFn: ['all'],
                rowContextMenuToggleBy: [0],
            })
        });

        const date = new Date();
        for (let i = 0; i < 100; ++i) {
            date.setDate(date.getDate() + 1);
            this.tableStaticDataSrc.push({
                column1: i + 1,
                column2: i + 2,
                column3: date.toUTCString(),
                column4: i + 4,
            });
        }

        this.form.get(['config', 'tableColumns'])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((visibleTableColumns: string[]) => {
                const tableColumns = this.tableColumns;
                const visibilityConfig: PxTableColumnVisibility[] = [];

                for (let i = tableColumns.length; i--;) {
                    const tableColumn = tableColumns[i];
                    visibilityConfig.push({
                        columnId: tableColumn.id,
                        visible: visibleTableColumns.includes(tableColumn.id)
                    });
                }

                this.table.changeColumnsVisibility(visibilityConfig);
            });

        [
            'rowContextMenuItems',
            'rowContextMenuIsVisibleFn',
        ].forEach(formControl => this.form.get(['config', formControl])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(() => this.table.refresh(false)));
    }

    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
