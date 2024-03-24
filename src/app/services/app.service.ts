import {Inject, Injectable, OnDestroy} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {BehaviorSubject, debounceTime, fromEvent, Subject, takeUntil} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService implements OnDestroy {
    private theme: string = 'blue';
    private darkModeActive = false;
    public isViewportMobileSize: BehaviorSubject<boolean>;

    private serviceDestroyed$ = new Subject<void>();

    constructor(
        @Inject(DOCUMENT) private readonly document: Document
    ) {

        this.isViewportMobileSize = new BehaviorSubject<boolean>(this.getIsViewportMobileSize());

        fromEvent(window, 'resize').pipe(
            debounceTime(700),
            takeUntil(this.serviceDestroyed$)
        ).subscribe(() => {
            const isMobileSize = this.getIsViewportMobileSize();
            if (isMobileSize !== this.isViewportMobileSize.getValue()) {
                this.isViewportMobileSize.next(isMobileSize);
            }
        });
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

    getIsViewportMobileSize(maxWidth = 768) {
        return Math.min(window.innerWidth, window.innerHeight) <= maxWidth;
    }

    ngOnDestroy() {
        this.serviceDestroyed$.next();
        this.serviceDestroyed$.complete();
    }
}
