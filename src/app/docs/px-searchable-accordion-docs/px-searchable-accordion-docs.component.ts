import { Component } from '@angular/core';
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {FloatLabelModule} from "primeng/floatlabel";
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {pxSearchableAccordionCodeExample} from "./code-example";
import {
    PxSearchableAccordionComponent
} from "../../../../projects/px-searchable-accordion/src/lib/px-searchable-accordion.component";
import {PxSearchableAccordionEntry} from "../../../../projects/px-searchable-accordion/src/lib/px-searchable-accordion";
import {BadgeModule} from "primeng/badge";
import {Subject} from "rxjs";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-px-searchable-accordion-docs',
  standalone: true,
    imports: [
        LibraryDocumentationComponent,
        CodeExampleComponent,
        ReactiveFormsModule,
        FloatLabelModule,
        PxSearchableAccordionComponent,
        BadgeModule,
        InputTextModule,
    ],
  templateUrl: './px-searchable-accordion-docs.component.html',
  styleUrl: './px-searchable-accordion-docs.component.scss'
})
export class PxSearchableAccordionDocsComponent {
    protected readonly pxSearchableAccordionCodeExample = pxSearchableAccordionCodeExample;
    protected form: UntypedFormGroup;

    protected entries: PxSearchableAccordionEntry[] = [];
    protected search$ = new Subject<string>();

    constructor(
        fb: UntypedFormBuilder,
    ) {
        this.form = fb.group({
            config: fb.group({
                config: ['0'],
            })
        });

        for(let i = 0; i < 4; ++i) {
            this.entries.push({
                header: 'Entry ' + i,
                description: 'Description'
            });
        }
    }
}
