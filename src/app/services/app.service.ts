import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private theme: string = 'blue';
    private darkModeActive = false;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document
    ) {
    }

    setTheme(theme: 'blue') {
        this.theme = theme;
    }

    toggleDarkMode() {
        this.darkModeActive = !this.darkModeActive;
        this.document.getElementById('dynamicStylesheet')?.setAttribute('href', this.theme + '-' + (this.darkModeActive ? 'dark' : 'light') + '.css');
    }

    isDarkModeActive() {
        return this.darkModeActive;
    }
}
