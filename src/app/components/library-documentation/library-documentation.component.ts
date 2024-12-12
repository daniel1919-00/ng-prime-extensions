import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Card} from "primeng/card";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";

@Component({
    selector: 'app-library-documentation',
    standalone: true,
    imports: [
        Card,
        Tabs,
        TabList,
        Tab,
        TabPanels,
        TabPanel
    ],
    templateUrl: './library-documentation.component.html',
    styleUrl: './library-documentation.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class LibraryDocumentationComponent {
    @Input({required: true}) header!: string;
    @Input() hiddenSections: ('docOverview' | 'docApi' | 'docIntl' | 'docStyling')[] = [];
}
