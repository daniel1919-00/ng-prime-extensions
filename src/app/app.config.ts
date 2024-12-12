import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {HIGHLIGHT_OPTIONS} from "ngx-highlightjs";
import {
    HTTP_INTERCEPTORS,
    provideHttpClient,
    withInterceptorsFromDi
} from "@angular/common/http";
import {BackendInterceptor} from "./backend.interceptor";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {AuraThemeExtended} from "./themes/auraTheme";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                    xml: () => import('highlight.js/lib/languages/xml')
                },
                themePath: 'assets/highlightjs/xcode.css' // Optional, and useful if you want to change the theme dynamically
            }
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BackendInterceptor,
            multi: true
        },
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: AuraThemeExtended,
                options:{
                    darkModeSelector: '.app-dark-mode'
                }
            }
        })
    ]
};
