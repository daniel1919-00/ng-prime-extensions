import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeExample, CodeTab} from "./code-example";
import {HighlightModule} from "ngx-highlightjs";

@Component({
    selector: 'app-code-example',
    standalone: true,
    imports: [
        CommonModule,
        HighlightModule,
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

    constructor() {
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
        // this.notifications.notify({
        //     type: "info",
        //     content: 'Source code copied to clipboard.'
        // });
    }
}
