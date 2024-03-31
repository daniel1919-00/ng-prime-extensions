import {Inject, Injectable, OnDestroy} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {BehaviorSubject, debounceTime, fromEvent, Subject, takeUntil} from "rxjs";
import {HighlightLoader} from "ngx-highlightjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AppService implements OnDestroy {
    private theme!: string;
    private darkModeActive!: boolean;
    public isViewportMobileSize: BehaviorSubject<boolean>;

    private serviceDestroyed$ = new Subject<void>();

    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private hljsLoader: HighlightLoader,
        private router: Router
    ) {
        const savedAppearance = localStorage.getItem('__savedAppearance');
        if(savedAppearance) {
            this.setAppearance(JSON.parse(savedAppearance));
        } else {
            // Default appearance
            this.setAppearance({
                darkModeState: false,
                theme: 'blue'
            });
        }

        this.isViewportMobileSize = new BehaviorSubject<boolean>(this.getIsViewportMobileSize());

        fromEvent(window, 'resize').pipe(
            debounceTime(300),
            takeUntil(this.serviceDestroyed$)
        ).subscribe(() => {
            const isMobileSize = this.getIsViewportMobileSize();
            if (isMobileSize !== this.isViewportMobileSize.getValue()) {
                this.isViewportMobileSize.next(isMobileSize);
            }
        });
    }

    reloadCurrentRoute() {
        const router = this.router;
        const currentUrl = router.url;
        router.navigateByUrl('/', {skipLocationChange: true, onSameUrlNavigation: 'reload'}).then(() =>
        {
            router.navigateByUrl(currentUrl, {skipLocationChange: true}).then();
        });
    }

    toggleDarkMode() {
        this.setAppearance({darkModeState: !this.darkModeActive});
    }

    setAppearance(appearance: {darkModeState?: boolean; theme?: string;}) {
        if(appearance.theme !== undefined) {
            this.theme = appearance.theme;
        }

        if(appearance.darkModeState !== undefined) {
            const darkModeActive = appearance.darkModeState;
            this.darkModeActive = darkModeActive;
            this.hljsLoader.setTheme(darkModeActive ? 'assets/highlightjs/vs2015.css' : 'assets/highlightjs/xcode.css');
            this.document.getElementById('dynamicStylesheet')?.setAttribute('href', this.theme + '-' + (darkModeActive ? 'dark' : 'light') + '.css');
        }

        localStorage.setItem('__savedAppearance', JSON.stringify({
            darkModeState: this.darkModeActive,
            theme: this.theme
        }));
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
