import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    TemplateRef,
    ViewChildren, ViewEncapsulation
} from "@angular/core";
import {TableLazyLoadEvent, TableModule, TableRowSelectEvent, TableRowUnSelectEvent} from "primeng/table";
import {
    PX_TABLE_RENDER_COMPONENT_DATA,
    PxTableColumnDefinition,
    PxTableColumnVisibility,
    PxTableDataRequestInfo,
    PxTableDataResponse,
    PxTableRenderComponentData,
    PxTableRow,
    PxTableSortedColumn
} from "./px-table";
import {NgClass, NgComponentOutlet, NgTemplateOutlet} from "@angular/common";
import {PxTableRenderPipePipe} from "./px-table-render.pipe";
import {Observable, Subscription} from "rxjs";
import {FormGroup} from "@angular/forms";
import {FilterMetadata, MenuItem} from "primeng/api";
import {Button} from "primeng/button";
import {Menu} from "primeng/menu";
import {ContextMenu} from "primeng/contextmenu";
import {ProgressSpinner} from "primeng/progressspinner";
import {PrimeNG} from "primeng/config";

@Component({
    selector: 'px-table',
    imports: [
        PxTableRenderPipePipe,
        ContextMenu,
        TableModule,
        NgClass,
        NgTemplateOutlet,
        Button,
        Menu,
        NgComponentOutlet,
        ProgressSpinner,
    ],
    templateUrl: './px-table.component.html',
    styleUrl: './px-table.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'px-table',
    }
})
export class PxTableComponent implements OnInit, OnChanges, OnDestroy
{
    @ViewChildren('toggledContextMenu') toggledContextMenus!: QueryList<Menu>;
    /**
     * Table column definitions.
     */
    @Input({required: true}) columns!: PxTableColumnDefinition[];
    /**
     * The data source from which rows are fetched.
     * Can be a static array of rows or a function that takes in info about the data request (like the current page index, the sorted columns, etc.) and returns an observable which will emit the information required by the table.
     */
    @Input({required: true}) dataSource!: PxTableRow[] | ((requestInfo: PxTableDataRequestInfo) => Observable<PxTableDataResponse>);
    /**
     * An array of objects to represent dynamic columns that are frozen.
     */
    @Input() frozenColumns?: any[];
    /**
     * An array of objects to display as frozen.
     */
    @Input() frozenValue?: any[];
    /**
     * Whether pagination is enabled.
     */
    @Input() paginator: boolean = true;
    /**
     * Number of rows to display per page.
     */
    @Input() rowsPerPage = 10;
    /**
     * Array of integer values to display inside rows per page dropdown of paginator.
     */
    @Input() rowsPerPageOptions: number[] = [5, 10, 20, 30, 40, 50];
    @Input() stripedRows: boolean = false;
    /**
     * Specifies the selection mode, valid values are "single" and "multiple". Passing null/undefined will disable row selection.
     */
    @Input() selectionMode?: null | 'single' | 'multiple';
    /**
     * Whether to display the "select all" header checkbox.
     */
    @Input() selectAllCheckbox?: boolean = false;
    /**
     * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
     */
    @Input() selectionPageOnly?: boolean;
    /**
     * Selected row in single mode or an array of values in multiple mode.
     */
    @Input() selection?: any[];
    /**
     * Selected row with a context menu.
     */
    @Input() contextMenuSelection?: PxTableRow;
    /**
     * Callback to invoke on context menu selection change.
     */
    @Output() contextMenuSelectionChange = new EventEmitter<PxTableRow>();
    /**
     * Defines the responsive mode.
     */
    @Input() responsiveLayout: 'stack' | 'scroll' = 'scroll';
    /**
     * The breakpoint to define the maximum width boundary when using stack responsive layout.
     */
    @Input() breakpoint: string = '960px';
    /**
     * Own implementation of table filters to pass along to the [dataSource].
     * [filters] and [globalFilterFields] inputs will be ignored if this is set.
     */
    @Input() pxFilters?: { [filter: string]: any } | FormGroup;
    /**
     * An array of FilterMetadata objects to provide external filters.
     */
    @Input() filters: { [p: string]: FilterMetadata | FilterMetadata[] } = {};
    /**
     * An array of fields as string to use in global filtering.
     */
    @Input() globalFilterFields?: string[];
    /**
     * Defines whether sorting works on single column or on multiple columns.
     */
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
     * Passed to p-table.
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
    @Input() tableStyle?: { [p: string]: any } | null;
    /**
     * Style class of the table.
     */
    @Input() tableStyleClass?: string;
    /**
     * An array of menu items.
     * This enables the context menu and context menu toggle button (added automatically on a separate column at the end of the table).
     */
    @Input() rowContextMenuItems?: MenuItem[];
    /**
     * A function that takes the row of the active context menu and returns the array of items.
     * If set then the [rowContextMenuItems] input is ignored.
     */
    @Input() dynamicContextMenuItems?: (rowData: PxTableRow) => MenuItem[];
    /**
     * Name of the icon to be passed along to the p-button toggle.
     */
    @Input() rowContextMenuToggleIcon: string = 'pi pi-bars';
    /**
     * Limits how the context menu is toggled. By default, the menu is triggered by both a right click action and by the button inside the special "actions" column.
     */
    @Input() rowContextMenuToggleBy?: 'rightClick' | 'button';
    /**
     * Custom loading icon template.
     */
    @Input() loadingIconTemplateRef?: TemplateRef<any>;

    /**
     * Function that determines when the contextual menu is active for a particular row.
     */
    @Input() rowContextMenuIsActiveFn?: (row: PxTableRow) => boolean;

    /**
     * Callback to invoke on selection changed.
     */
    @Output() selectionChange = new EventEmitter();
    /**
     * Callback to invoke when a row is selected.
     */
    @Output() onRowSelect = new EventEmitter<TableRowSelectEvent>();
    /**
     * Callback to invoke when a row is unselected.
     */
    @Output() onRowUnselect = new EventEmitter<TableRowUnSelectEvent>();

    protected displayedColumns: PxTableColumnDefinition[] = [];
    protected records: PxTableRow[] = [];
    protected totalRecords = 0;
    protected firstRowIndex: number = 0;
    protected isDataSrcStatic = true;
    protected isLoading = false;

    private lastLazyLoadEventData: TableLazyLoadEvent = {};
    private tableInitialized = false;
    private columnInjectorCache: {[columnId: string]: Injector} = {};
    private dataSrcSub?: Subscription;

    constructor(
        protected primeNGConfig: PrimeNG,
        private injector: Injector,
        private changeDetector: ChangeDetectorRef,
    )
    {
    }

    ngOnInit()
    {
        if (this.pxFilters)
        {
            this.filters = {};
            delete this.globalFilterFields;
        }

        if (this.dynamicContextMenuItems)
        {
            this.rowContextMenuItems = [];
        }

        this.prepareDisplayedColumns();
        this.checkDataSource();
        this.tableInitialized = true;
    }

    ngOnChanges(changes: SimpleChanges)
    {
        if (changes['columns'] && !changes['columns'].firstChange)
        {
            this.prepareDisplayedColumns();
            this.changeDetector.detectChanges();
        }

        if (changes['selectAllCheckbox'] && !changes['selectAllCheckbox'].firstChange)
        {
            this.changeDetector.detectChanges();
        }

        if (changes['dataSource'] && !changes['dataSource'].firstChange)
        {
            this.checkDataSource();
        }
    }

    /**
     * Re-fetch table data.
     * @param resetPage
     */
    refresh(resetPage = true)
    {
        if (this.isLoading)
        {
            return;
        }

        if (resetPage)
        {
            this.firstRowIndex = 0;
        }
        this.onLazyLoad(this.lastLazyLoadEventData);
    }

    /**
     * Hides/shows or toggles the specified table column's visibility.
     * @param columnId
     * @param visible If not specified, the visibility will be toggled
     */
    changeColumnVisibility(columnId: string, visible?: boolean)
    {
        const column = this.getColumn(columnId);
        if (!column)
        {
            return;
        }

        column.visible = typeof visible === 'undefined' ? !column.visible : visible;
        this.prepareDisplayedColumns();
        this.changeDetector.detectChanges();
    }

    /**
     * Changes the visibility of multiple columns at once.
     * @param columns The columns and their visibility. Example: [{columnId: 'myColumn1', visible: true}, {columnId: 'myOtherColumn', visible: false}] -- sets myColumn1 to visible and hides myOtherColumn
     */
    changeColumnsVisibility(columns: PxTableColumnVisibility[])
    {
        for (let i = columns.length; i--;)
        {
            const colVisibilityConfig = columns[i];
            const column = this.getColumn(colVisibilityConfig.columnId);
            if (!column)
            {
                continue;
            }

            column.visible = typeof colVisibilityConfig.visible !== "undefined" ? colVisibilityConfig.visible : !column.visible;
        }

        this.prepareDisplayedColumns();
        this.changeDetector.detectChanges();
    }

    protected onLazyLoad($event: TableLazyLoadEvent)
    {
        const dataSource = this.dataSource;
        if (this.isDataSrcStatic)
        {
            this.columnInjectorCache = {};
            this.records = dataSource as PxTableRow[];
            this.totalRecords = dataSource.length;
            this.changeDetector.detectChanges();
        }
        else
        {
            this.isLoading = true;
            this.lastLazyLoadEventData = $event;

            const sortedColumns: PxTableSortedColumn[] = [];

            if (this.sortMode === 'multiple')
            {
                const multiSortColumns = $event.multiSortMeta;
                if (multiSortColumns)
                {
                    const multiSortColumnsLen = multiSortColumns.length;
                    for (let i = 0; i < multiSortColumnsLen; ++i)
                    {
                        const sortedCol = multiSortColumns[i];
                        sortedColumns.push({
                            columnId: sortedCol.field,
                            order: sortedCol.order
                        });
                    }
                }
            }
            else
            {
                sortedColumns.push({
                    columnId: $event.sortField as string || this.sortColumnId || '',
                    order: $event.sortOrder || this.sortDirection
                });
            }

            this.dataSrcSub?.unsubscribe();
            this.dataSrcSub = (dataSource as Exclude<typeof this.dataSource, PxTableRow[]>)({
                firstRowIndex: $event.first || 0,
                pageLength: $event.rows || this.rowsPerPage,
                sortedColumns,
                filters: this.pxFilters ? (this.pxFilters instanceof FormGroup ? this.pxFilters.value || {} : this.filters || {}) : $event.filters
            }).subscribe(response =>
            {
                this.columnInjectorCache = {};
                this.records = response.records;
                this.totalRecords = response.totalRecords;
                this.isLoading = false;
                this.changeDetector.detectChanges();
            });
        }
    }

    protected onContextMenuSelectionChange(rowData: PxTableRow, closeOpenMenus = true)
    {
        this.contextMenuSelection = rowData;

        if (closeOpenMenus)
        {
            const contextMenuPanels = this.toggledContextMenus.toArray()
            const contextMenuPanelsLen = contextMenuPanels.length;
            for (let i = 0; i < contextMenuPanelsLen; ++i)
            {
                contextMenuPanels[i].hide();
            }
        }

        this.contextMenuSelectionChange.emit(rowData);
    }

    protected onContextMenuShown()
    {
        if (!(this.dynamicContextMenuItems && this.contextMenuSelection))
        {
            return;
        }

        this.rowContextMenuItems = this.dynamicContextMenuItems(this.contextMenuSelection);
    }

    protected createRenderComponentInjector(column: PxTableColumnDefinition, row: PxTableRow, rowIndex: number)
    {
        const injectorCacheKey = column.id + '' + rowIndex;
        const columnInjectorCache = this.columnInjectorCache;

        if(!columnInjectorCache[injectorCacheKey])
        {
            columnInjectorCache[injectorCacheKey] = Injector.create({
                providers: [{
                    provide: PX_TABLE_RENDER_COMPONENT_DATA,
                    useValue: {
                        columnId: column.id,
                        columnData: row[column.id],
                        row,
                        arguments: column.renderUsing?.arguments
                    } as PxTableRenderComponentData
                }],
                parent: this.injector
            });
        }

        return columnInjectorCache[injectorCacheKey];
    }

    private checkDataSource()
    {
        if (Array.isArray(this.dataSource))
        {
            this.isDataSrcStatic = true;
            this.refresh(this.tableInitialized);
        }
        else
        {
            this.isDataSrcStatic = false;
            this.tableInitialized && this.refresh();
        }
    }

    private prepareDisplayedColumns()
    {
        const columns = this.columns;
        const colLen = columns.length;
        const displayedColumns = [];

        for (let colIndex = 0; colIndex < colLen; ++colIndex)
        {
            const column = columns[colIndex];
            if (column.visible === undefined || column.visible)
            {
                displayedColumns.push(column);
            }
        }

        this.displayedColumns = displayedColumns;
    }

    private getColumn(columnId: string)
    {
        const columns = this.columns;
        let foundColumn: undefined | PxTableColumnDefinition;

        for (let i = columns.length; i--;)
        {
            const col = columns[i];
            if (col.id === columnId)
            {
                foundColumn = col;
                break;
            }
        }

        return foundColumn;
    }

    ngOnDestroy()
    {
        this.dataSrcSub?.unsubscribe();
    }
}
