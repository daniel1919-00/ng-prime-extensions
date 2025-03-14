import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {pxUploaderCodeExample} from "./code-example";
import {FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder} from "@angular/forms";
import {PxUploaderComponent} from "../../../../projects/px-uploader/src/lib/px-uploader.component";
import {PxEndpointConfig} from "../../../../projects/px-uploader/src/lib/px-uploader";
import {FloatLabel} from "primeng/floatlabel";
import {Subject, takeUntil} from "rxjs";
import {InputText} from "primeng/inputtext";
import {Select} from "primeng/select";
import {JsonPipe} from "@angular/common";
import {Button} from "primeng/button";

@Component({
    selector: 'app-px-uploader-docs',
    imports: [
        LibraryDocumentationComponent,
        CodeExampleComponent,
        FloatLabel,
        Select,
        ReactiveFormsModule,
        PxUploaderComponent,
        InputText,
        JsonPipe,
        Button
    ],
    templateUrl: './px-uploader-docs.component.html',
    styleUrl: './px-uploader-docs.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class PxUploaderDocsComponent implements OnDestroy {

    protected readonly pxUploaderCodeExample = pxUploaderCodeExample;
    protected form: FormGroup;
    protected uploaderFormControl = new FormControl(null);
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
            buttons: [0],
            allowedExtensions: ['.png, .jpg, .pdf']
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
