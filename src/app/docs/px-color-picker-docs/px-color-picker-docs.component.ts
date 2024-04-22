import {Component, OnDestroy} from '@angular/core';
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {pxColorPickerCodeExample} from "./code-example";
import {PxColorPickerComponent} from "../../../../projects/px-color-picker/src/lib/px-color-picker.component";
import {DropdownModule} from "primeng/dropdown";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Subject, takeUntil} from "rxjs";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-px-color-picker-docs',
  standalone: true,
    imports: [
        LibraryDocumentationComponent,
        CodeExampleComponent,
        PxColorPickerComponent,
        DropdownModule,
        FloatLabelModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        JsonPipe
    ],
  templateUrl: './px-color-picker-docs.component.html',
  styleUrl: './px-color-picker-docs.component.scss'
})
export class PxColorPickerDocsComponent implements OnDestroy {
    protected readonly pxColorPickerCodeExample = pxColorPickerCodeExample;
    protected form: FormGroup;
    protected twoWayBind = '#3344f5';

    private componentDestroyed$ = new Subject<void>();

    constructor(fb: UntypedFormBuilder) {
        this.form = fb.group({
            config: fb.group({
                inline: ['0']
            }),
            result: ['#528bef']
        });

        const storedFilters = localStorage.getItem('__px-color-picker-config');
        if(storedFilters) {
            // this.form.patchValue(JSON.parse(storedFilters));
        }

        this.form.valueChanges
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(value => localStorage.setItem('__px-color-picker-config', JSON.stringify(value)));
    }

    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
