import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";
import {PxTableComponent} from "../../../../projects/px-table/src/lib/px-table.component";
import {TabViewModule} from "primeng/tabview";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-library-documentation',
    standalone: true,
    imports: [
        CardModule,
        PxTableComponent,
        TabViewModule,
        NgIf
    ],
    templateUrl: './library-documentation.component.html',
    styleUrl: './library-documentation.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class LibraryDocumentationComponent {
    @Input({required: true}) header!: string;
    @Input() hiddenSections: ('docOverview' | 'docApi' | 'docIntl' | 'docStyling')[] = [];
}
