import { Component } from '@angular/core';
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {pxColorPickerCodeExample} from "./code-example";
import {PxColorPickerComponent} from "../../../../projects/px-color-picker/src/lib/px-color-picker.component";

@Component({
  selector: 'app-px-color-picker-docs',
  standalone: true,
    imports: [
        LibraryDocumentationComponent,
        CodeExampleComponent,
        PxColorPickerComponent
    ],
  templateUrl: './px-color-picker-docs.component.html',
  styleUrl: './px-color-picker-docs.component.scss'
})
export class PxColorPickerDocsComponent {
    protected readonly pxColorPickerCodeExample = pxColorPickerCodeExample;
}
