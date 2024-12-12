import {Component, Input} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {CodeExample, CodeTab} from "./code-example";
import {Button} from "primeng/button";
import {Tooltip} from "primeng/tooltip";
import {MessageService} from "primeng/api";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";
import {Highlight, HighlightAuto} from "ngx-highlightjs";

@Component({
    selector: 'app-code-example',
    standalone: true,
    imports: [
        Button,
        Tooltip,
        NgTemplateOutlet,
        Tabs,
        TabList,
        Tab,
        TabPanel,
        TabPanels,
        Highlight,
        HighlightAuto
    ],
    templateUrl: './code-example.component.html',
    styleUrl: './code-example.component.scss'
})
export class CodeExampleComponent {
    @Input() code?: CodeExample;
    @Input() title = 'Basic Example';
    protected showSource = false;
    protected currentOpenTab = CodeTab.HTML;

    private clipboard: Clipboard;

    constructor(
        private messageService: MessageService
    ) {
        this.clipboard = navigator.clipboard;
    }

    getCopyBtnTooltip() {
        switch (this.currentOpenTab) {
            case CodeTab.HTML:
                return 'Copy Html code';
            case CodeTab.TS:
                return 'Copy Typescript code';
            case CodeTab.STYLES:
                return 'Copy styles';
        }
    }

    async copyCode() {
        if(!this.code) {
            return;
        }

        let code = '';
        switch (this.currentOpenTab) {
            case CodeTab.HTML:
                code = this.code.html;
                break;

            case CodeTab.TS:
                code = this.code.ts;
                break;

            case CodeTab.STYLES:
                code = this.code.styles;
                break;

        }

        await this.clipboard.writeText(code);
        this.messageService.add({
            severity: 'info',
            summary: 'Source code copied to clipboard.'
        });
    }

    protected readonly CodeTab = CodeTab;
}
