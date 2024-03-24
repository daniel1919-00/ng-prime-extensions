import {Component, Inject, OnDestroy, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {PxTableComponent} from "../../../../projects/px-table/src/lib/px-table.component";
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {pxTableCodeExample} from "./code-example";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {
    PX_TABLE_RENDER_COMPONENT_DATA,
    PxTableColumnDefinition, PxTableColumnVisibility,
    PxTableRenderComponentData
} from "../../../../projects/px-table/src/lib/px-table";
import {DatePipe} from "@angular/common";
import {Subject, Subscription, takeUntil} from "rxjs";

@Component({
    standalone: true,
    template: `
        Rendering image id <strong>{{ columnData.columnData }}</strong> from <a href="https://picsum.photos/images">Lorem Picsum</a>.
        <br>
        <img [src]="'https://picsum.photos/id/'+columnData.columnData+'/100'" style="max-width: 100px">
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
        CodeExampleComponent
    ],
    providers: [
        DatePipe
    ],
    templateUrl: './px-table-docs.component.html',
    styleUrl: './px-table-docs.component.scss'
})
export class PxTableDocsComponent implements OnDestroy {

    protected readonly pxTableCodeExample = pxTableCodeExample;
    form: UntypedFormGroup;
    tableColumns: PxTableColumnDefinition[] = [
        {id: 'column1', name: 'Column 1', sortable: true},
        {id: 'column2', name: 'Column 2', sortable: true},
        {id: 'column3', name: 'date pipe rendered column', sortable: true, renderUsing: {pipe: DatePipe}},
        {id: 'column4', name: 'component rendered column', sortable: true, renderUsing: {component: MyColumnRenderer}},
    ];

    tableStaticDataSrc: {[key: string]: any}[] = [];

    tableServerSideDataSrc = 'https://localhost/table';
    rowContextMenuIsVisibleFn = (row: any) => {
        if(this.form.get(['config', 'rowContextMenu'])?.value !== '1') {
            return false;
        }

        const displayCond = this.form.get(['config', 'rowContextMenuIsVisibleFn'])?.value;
        if(displayCond === 'all') {
            return true;
        }

        return displayCond === 'even' ? row['column1'] % 2 === 0 : row['column1'] % 2 !== 0;
    }

    rowSelectionModel = [];
    clickedRowData: any = null;

    @ViewChild('table') private table!: PxTableComponent;
    private componentDestroyed$ = new Subject<void>();
    private rowClickedSub?: Subscription;

    constructor(
        fb: UntypedFormBuilder
    ) {
        this.form = fb.group({
            config: fb.group({
                tableColumns: [this.tableColumns.map(c => c.id)],
                dataSource: ['static'],
                sortingArrowPosition: ['after'],
                outline: ['1'],
                stripedRows: ['0'],
                rowContextMenu: ['0'],
                rowContextMenuIsVisibleFn: ['all'],
                rowHoverEffectEnabled: ['0'],
                rowSelectionModel: ['0'],
                rowSelectionModelMultiple: ['0'],
                rowClicked: ['0'],
                isLoading: [false],
                freezeHeaderRow: ['1'],
                maxHeight: ['700px'],
            })
        });

        const date = new Date();
        for(let i = 0; i < 100; ++i) {
            date.setDate(date.getDate() + 1);
            this.tableStaticDataSrc.push({
                column1: i + 1,
                column2: i + 2,
                column3: date.toUTCString(),
                column4: i + 4,
            });
        }

        // [
        //     'rowContextMenu',
        //     'rowContextMenuIsVisibleFn',
        // ].forEach(formControl => this.form.get(['config', formControl])?.valueChanges
        //     .pipe(takeUntil(this.componentDestroyed$))
        //     .subscribe(() => this.table.refresh(false)));

        this.form.get(['config', 'rowSelectionModelMultiple'])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(v => {
                if(v === '1') {
                    // this.rowSelectionModel = new PxTableSelectionModel<any>(true);
                } else {
                    // this.rowSelectionModel = new PxTableSelectionModel<any>(false);
                }
            });

        this.form.get(['config', 'tableColumns'])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((visibleTableColumns: string[]) => {
                const tableColumns = this.tableColumns;
                const visibilityConfig: PxTableColumnVisibility[] = [];

                for(let i = tableColumns.length; i--;) {
                    const tableColumn = tableColumns[i];
                    visibilityConfig.push({
                        columnId: tableColumn.id,
                        visible: visibleTableColumns.includes(tableColumn.id)
                    });
                }

                // this.table.changeColumnsVisibility(visibilityConfig);
            });

        this.form.get(['config', 'rowClicked'])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(v => {
                if(v === '1') {
                    // this.rowClickedSub = this.table.rowClicked$.subscribe((row: any) => {
                    //     this.clickedRowData = row;
                    // });
                } else {
                    this.rowClickedSub?.unsubscribe();
                    this.clickedRowData = null;
                }
            });

        this.form.get(['config', 'isLoading'])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(v => {
                // this.table.isLoading = v;
            });

        this.form.get(['config', 'freezeHeaderRow'])?.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(v => {
                if(v === '1') {
                    const maxHeightControl = this.form.get(['config', 'maxHeight']);
                    if(maxHeightControl && maxHeightControl.value === '') {
                        maxHeightControl.setValue('700px');
                    }
                }
            });
    }

    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
        this.rowClickedSub?.unsubscribe();
    }
}
