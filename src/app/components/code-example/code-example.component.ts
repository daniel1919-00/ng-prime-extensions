import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeExample, CodeTab} from "./code-example";
import {HighlightModule} from "ngx-highlightjs";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {MessageService} from "primeng/api";
import {TabViewModule} from "primeng/tabview";

@Component({
    selector: 'app-code-example',
    standalone: true,
    imports: [
        CommonModule,
        HighlightModule,
        ButtonModule,
        TooltipModule,
        TabViewModule,
    ],
    templateUrl: './code-example.component.html',
    styleUrl: './code-example.component.scss'
})
export class CodeExampleComponent {
    @Input({required: true}) code!: CodeExample;
    @Input() title = 'Basic Example';
    protected showSource = false;
    protected currentOpenTab = CodeTab.HTML

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
}
