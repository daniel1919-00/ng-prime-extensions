import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {PxTableComponent} from "../../../../projects/px-table/src/lib/px-table.component";
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";

@Component({
    selector: 'app-px-table',
    standalone: true,
    imports: [
        CardModule,
        PxTableComponent,
        LibraryDocumentationComponent
    ],
    templateUrl: './px-table-docs.component.html',
    styleUrl: './px-table-docs.component.scss'
})
export class PxTableDocsComponent {

}
