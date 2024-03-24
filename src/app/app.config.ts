import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {HIGHLIGHT_OPTIONS} from "ngx-highlightjs";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BackendInterceptor} from "./backend.interceptor";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
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
    ]
};
