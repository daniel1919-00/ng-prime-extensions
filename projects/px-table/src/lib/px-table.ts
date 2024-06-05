import {InjectionToken, ProviderToken, Type} from "@angular/core";
import {FilterMetadata} from "primeng/api";

export interface PxTableColumnDefinition {
    /**
     * This will be matched against the data source when providing value for this column.
     * For example the column id 'my_column' should be found in the data source, like so: [{'my_column': 'column_value'}, ...].
     */
    id: string;
    /**
     * The column display name.
     */
    name: string;
    /**
     * Classes to be placed on the whole column (th & td).
     * The values must be compatible with ngClass.
     */
    classes?: string[] | { [className: string]: boolean };
    /**
     * Is this column sortable?
     */
    sortable?: boolean;
    /**
     * Whether this column is displayed or hidden.
     */
    visible?: boolean;
    /**
     * Render this column using a pipe or a component.
     * If both are set, the component property takes priority
     */
    renderUsing?: {
        component?: Type<any>;
        pipe?: ProviderToken<any>;
        /**
         * arguments to be passed to either the pipe or the component
         */
        arguments?: any[] | { [key: string]: any }
    };
}

export interface PxTableRow {
    [columnId: string]: any;
}

export interface PxTableRenderComponentData {
    columnId: string;
    columnData: string;
    row: PxTableRow;
    arguments: any[] | { [key: string]: any };
}

export interface PxTableDataResponse {
    totalRecords: number;
    records: PxTableRow[];
}

export interface PxTableColumnVisibility {
    columnId: string;
    /**
     * If not specified, the visibility will be toggled
     */
    visible?: boolean;
}

export interface PxTableColumnVisibility {
    columnId: string;
    /**
     * If not specified, the visibility will be toggled
     */
    visible?: boolean;
}

export interface PxTableSortedColumn {
    columnId: string;
    /**
     * Sort order. 1 - Ascending / -1 - Descending
     */
    order: number;
}

export const PX_TABLE_RENDER_COMPONENT_DATA = new InjectionToken<PxTableRenderComponentData>('PX_TABLE_RENDER_COMPONENT_DATA');

export interface PxTableDataRequestInfo {
    firstRowIndex: number;
    pageLength: number;
    sortedColumns: PxTableSortedColumn[];
    filters: { [filter: string]: any } | { [p: string]: FilterMetadata | FilterMetadata[] | undefined };
}
