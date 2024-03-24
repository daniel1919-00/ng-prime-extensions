import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Injector,
    Input, OnChanges,
    OnInit,
    Output, SimpleChanges
} from "@angular/core";
import {TableLazyLoadEvent, TableModule} from "primeng/table";
import {
    PX_TABLE_RENDER_COMPONENT_DATA,
    PxTableColumnDefinition, PxTableColumnVisibility, PxTableDataResponse,
    PxTableRenderComponentData,
    PxTableRow, PxTableSortedColum
} from "./px-table";
import {AsyncPipe, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {PxTableRenderPipePipe} from "./px-table-render.pipe";
import {Observable, take} from "rxjs";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'px-table',
    standalone: true,
    imports: [
        TableModule,
        NgForOf,
        NgIf,
        NgComponentOutlet,
        NgTemplateOutlet,
        PxTableRenderPipePipe,
        AsyncPipe
    ],
    templateUrl: './px-table.component.html',
    styleUrl: './px-table.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PxTableComponent implements OnInit, OnChanges {
    /**
     * Table column definitions.
     */
    @Input({required: true}) columns!: PxTableColumnDefinition[];
    /**
     * The data source from which rows are fetched.
     * Can be a static array of rows or a function that takes in the current page index, the sorted columns (if sort mode is single, then the array will always contain the currently sorted column) and the table filters and returns an observable which will emit the information required by the table.
     */
    @Input({required: true}) dataSource!: PxTableRow[] | ((pageIndex: number, sortedColumns: PxTableSortedColum[], filters: {[filter: string]: any}) => Observable<PxTableDataResponse>);
    /**
     * Whether pagination is enabled
     */
    @Input() paginator: boolean = true;
    /**
     * Number of rows to display per page.
     */
    @Input() rowsPerPage = 10;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     */
    @Input() rowsPerPageOptions?: any[];
    /**
     * Specifies the selection mode, valid values are "single" and "multiple".
     */
    @Input() selectionMode?: null | 'single' | 'multiple';
    /**
     * Selected row in single mode or an array of values in multiple mode.
     */
    @Input() selection?: any[];
    @Output() selectionChange = new EventEmitter();
    /**
     * Defines the responsive mode
     */
    @Input() responsiveLayout: 'stack' | 'scroll' = 'scroll';
    /**
     * Table filters to pass along to the [dataSource]
     */
    @Input() filters?: {[filter: string]: any} | FormGroup;

    @Input() sortMode: 'single' | 'multiple' = 'single';
    /**
     * Name of the field to sort data by default.
     */
    @Input() sortColumnId?: string;
    /**
     * Order to sort when default sorting is enabled.
     * 0 - unsorted
     * 1 - Ascending
     * -1 - Descending
     */
    @Input() sortDirection: 0 | -1 | 1 = 0;
    /**
     * When true, resets paginator to first page after sorting. Available only when sortMode is set to single.
     */
    @Input() resetPageOnSort = true;
    /**
     * Passed to p-table
     */
    @Input() styleClass?: string;
    /**
     * When enabled, columns can be resized using drag and drop.
     */
    @Input() resizableColumns?: boolean;
    /**
     * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
     */
    @Input() columnResizeMode: 'fit' | 'expand' = 'fit';
    /**
     * Enables scrollable tables.
     */
    @Input() scrollable?: boolean;
    /**
     * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
     */
    @Input() scrollHeight?: string;
    /**
     * When enabled, columns can be reordered using drag and drop.
     */
    @Input() reorderableColumns?: boolean;
    /**
     * A property to uniquely identify a record in data.
     */
    @Input() dataKey?: string;
    /**
     * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
     */
    @Input() stateStorage: 'session' | 'local' = 'session';
    /**
     * Unique identifier of a stateful table to use in state storage.
     */
    @Input() stateKey?: string;
    /**
     * Inline style of the table.
     */
    @Input() tableStyle?: {[p: string]: any} | null;
    /**
     * Style class of the table.
     */
    @Input() tableStyleClass?: string;

    protected displayedColumns: string[] = [];
    protected records: PxTableRow[] = [];
    protected totalRecords = 0;
    protected pageIndex: number = 0;
    protected isDataSrcStatic = true;
    protected isLoading = false;

    private lastLazyLoadEventData: TableLazyLoadEvent = {};

    constructor(
        private injector: Injector,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.prepareDisplayedColumns();
        this.checkDataSource();
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['columns'] && !changes['columns'].firstChange) {
            this.prepareDisplayedColumns();
            this.changeDetector.markForCheck();
        }

        if(changes['dataSource'] && !changes['dataSource'].firstChange) {
            this.checkDataSource();
            this.changeDetector.markForCheck();
        }
    }

    refresh(resetPage = true) {
        if(this.isLoading) {
            return;
        }

        if(resetPage) {
            this.pageIndex = 0;
        }
        this.onLazyLoad(this.lastLazyLoadEventData);
    }

    /**
     * Hides/shows or toggles the specified table column's visibility
     * @param columnId
     * @param visible If not specified, the visibility will be toggled
     */
    changeColumnVisibility(columnId: string, visible?: boolean) {
        const column = this.getColumn(columnId);
        if(!column) {
            return;
        }

        column.visible = typeof visible === 'undefined' ? !column.visible : visible;
        this.prepareDisplayedColumns();
        this.changeDetector.markForCheck();
    }

    /**
     * Changes the visibility of multiple columns
     * @param columns The columns and their visibility. Example: [{columnId: 'myColumn1', visible: true}, {columnId: 'myOtherColumn', visible: false}] -- sets myColumn1 to visible and hides myOtherColumn
     */
    changeColumnsVisibility(columns: PxTableColumnVisibility[]) {
        for(let i = columns.length; i--;) {
            const colVisibilityConfig = columns[i];
            const column = this.getColumn(colVisibilityConfig.columnId);
            if(!column) {
                continue;
            }

            column.visible = typeof colVisibilityConfig.visible !== "undefined" ? colVisibilityConfig.visible : !column.visible;
        }

        this.prepareDisplayedColumns();
        this.changeDetector.markForCheck();
    }

    protected onLazyLoad($event: TableLazyLoadEvent) {
        const dataSource = this.dataSource;
        if(this.isDataSrcStatic) {
            this.records = dataSource as PxTableRow[];
            this.totalRecords = dataSource.length;
            this.changeDetector.markForCheck();
        } else {
            this.isLoading = true;
            this.changeDetector.markForCheck();

            this.lastLazyLoadEventData = {
                multiSortMeta: $event.multiSortMeta,
                sortField: $event.sortField,
                sortOrder: $event.sortOrder
            };

            const sortedColumns: PxTableSortedColum[] = [];

            if(this.sortMode === 'multiple') {
                const multiSortColumns = $event.multiSortMeta;
                if(multiSortColumns)
                {
                    const multiSortColumnsLen = multiSortColumns.length;
                    for(let i = 0; i < multiSortColumnsLen; ++i) {
                        const sortedCol = multiSortColumns[i];
                        sortedColumns.push({
                            columnId: sortedCol.field,
                            order: sortedCol.order
                        });
                    }
                }
            } else {
                sortedColumns.push({
                    columnId: $event.sortField as string || '',
                    order: $event.sortOrder || 0
                });
            }

            (dataSource as Exclude<typeof this.dataSource, PxTableRow[]>)(
                this.pageIndex,
                sortedColumns,
                this.filters instanceof FormGroup ? this.filters.value || {} : this.filters || {}
            ).pipe(take(1)).subscribe(response => {
                this.records = response.records;
                this.totalRecords = response.totalRecords;
                this.isLoading = false;
                this.changeDetector.markForCheck();
            });
        }
    }

    protected createRenderComponentInjector(column: PxTableColumnDefinition, columnData: any) {
        return Injector.create({
            providers: [{
                provide: PX_TABLE_RENDER_COMPONENT_DATA,
                useValue: {
                    columnId: column.id,
                    columnData,
                    arguments: column.renderUsing?.arguments
                } as PxTableRenderComponentData
            }],
            parent: this.injector
        });
    }

    protected identifyColumn(index: number, column: PxTableColumnDefinition) {
        return column.id;
    }

    private checkDataSource() {
        if(Array.isArray(this.dataSource)) {
            this.isDataSrcStatic = true;
            this.refresh(false);
        } else {
            this.isDataSrcStatic = false;
        }
    }

    private prepareDisplayedColumns() {
        const columns = this.columns;
        const colLen = columns.length;
        const displayedColumns = [];

        for (let colIndex = 0; colIndex < colLen; ++colIndex) {
            const column = columns[colIndex];
            if (column.visible === undefined || column.visible) {
                displayedColumns.push(column.id);
            }
        }

        this.displayedColumns = displayedColumns;
    }

    private getColumn(columnId: string) {
        const columns = this.columns;
        let foundColumn: undefined|PxTableColumnDefinition;

        for(let i = columns.length; i--;) {
            const col = columns[i];
            if(col.id === columnId) {
                foundColumn = col;
                break;
            }
        }

        return foundColumn;
    }
}
