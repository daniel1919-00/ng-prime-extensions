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
    protected entriesWithCustomTemplates: PxSearchableAccordionEntry[] = [];
    protected search$ = new Subject<string>();

    constructor(
        fb: UntypedFormBuilder,
    ) {
        this.form = fb.group({
            config: fb.group({
                config: ['0'],
            })
        });

        this.entries.push({
            id: 'demo-entry',
            header: 'Demo entry',
            content: `
                <h1>HTML Ipsum Presents</h1>
                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                <h2>Header Level 2</h2>

                <ol>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>

                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

                <h3>Header Level 3</h3>

                <ul>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ul>
            `
        });

        for(let i = 1; i < 5; ++i) {
            this.entries.push({
                id: 'entry-' + i,
                header: 'Entry ' + i,
                content: `<strong>Description</strong> <a href="https://github.com/daniel1919-00/ng-prime-extensions" target="_blank">GitHub link</a>`
            });
        }
    }
}
