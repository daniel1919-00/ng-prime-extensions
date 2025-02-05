import {CodeExample} from "../../components/code-example/code-example";

export const pxUploaderCodeExample: CodeExample = {
    ts: `
import {Component, OnDestroy} from '@angular/core';
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {FormGroup, ReactiveFormsModule, UntypedFormBuilder} from "@angular/forms";
import {PxUploaderComponent} from "../../../../projects/px-uploader/src/lib/px-uploader.component";
import {PxEndpointConfig} from "../../../../projects/px-uploader/src/lib/px-uploader";
import {HttpClientModule} from "@angular/common/http";
import {DropdownModule} from "primeng/dropdown";
import {FloatLabelModule} from "primeng/floatlabel";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-px-uploader-docs',
  standalone: true,
    imports: [
        LibraryDocumentationComponent,
        ReactiveFormsModule,
        PxUploaderComponent,
        HttpClientModule,
        DropdownModule,
        FloatLabelModule
    ],
  templateUrl: './px-uploader-docs.component.html',
  styleUrl: './px-uploader-docs.component.scss'
})
export class PxUploaderDocsComponent implements OnDestroy {

    protected readonly pxUploaderCodeExample = pxUploaderCodeExample;
    protected form: FormGroup;
    saveEndpoint: PxEndpointConfig = {
        url: 'https://localhost/px-uploader'
    };

    private componentDestroyed$ = new Subject<void>();

    constructor(
        fb: UntypedFormBuilder
    ) {
        this.form = fb.group({
            label: ['My uploader'],
            multiple: ['0'],
            showImagePreview: ['1'],
            displayAs: ['list'],
            buttons: [0]
        });

        const storedFilters = localStorage.getItem('__px-uploader-config');
        if(storedFilters) {
            this.form.patchValue(JSON.parse(storedFilters));
        }

        this.form.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => this.storeFilters());
    }

    private storeFilters() {
        localStorage.setItem('__px-uploader-config', JSON.stringify(this.form.value));
    }

    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
    `,
    html: `
<h2>Configuration</h2>
<form [formGroup]="form" class="dm:grid dm:align-items-center">
    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <input type="text" id="[label]" pInputText formControlName="label">
        <label for="[label]">[label]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[multiple]"
                    [options]="[{value: '0', desc: 'false'}, {value: '1', desc: 'true'}]"
                    optionLabel="desc" optionValue="value" formControlName="multiple"></p-select>
        <label for="[multiple]">[multiple]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[showImagePreview]"
                    [options]="[{value: '0', desc: 'false'}, {value: '1', desc: 'true'}]"
                    optionLabel="desc" optionValue="value" formControlName="showImagePreview"></p-select>
        <label for="[showImagePreview]">[showImagePreview]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[displayAs]"
                    [options]="[{value: 'list', desc: 'list'}, {value: 'grid', desc: 'grid'}]"
                    optionLabel="desc" optionValue="value" formControlName="displayAs"></p-select>
        <label for="[displayAs]">[displayAs]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[buttons]"
                  [options]="[{value: 0, desc: 'Use default buttons'}, {value: 1, desc: 'Use custom remove button template'}]"
                  optionLabel="desc" optionValue="value" formControlName="buttons"></p-select>
        <label for="[buttons]">[buttons]</label>
    </p-floatlabel>
</form>

<br>
<h2>Result</h2>
<px-uploader
    #uploader
    [saveEndpoint]="saveEndpoint"
    [label]="form.get('label')?.value"
    [multiple]="form.get('multiple')?.value === '1'"
    [showImagePreview]="form.get('showImagePreview')?.value === '1'"
    [displayAs]="form.get('displayAs')?.value || 'list'"
    [buttons]="form.get('buttons')?.value ? {removeFileButton: customRemoveButtonTemplate} : undefined"
></px-uploader>


<ng-template let-icon="icon" let-onClick="onClick" #customRemoveButtonTemplate>
    <p-button (onClick)="onClick()">
        My custom button
    </p-button>
</ng-template>
    `,
    styles: ``
};
