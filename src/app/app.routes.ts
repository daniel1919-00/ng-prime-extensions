import {Routes} from '@angular/router';
import {IntroComponent} from "./components/intro/intro.component";

export const routes: Routes = [
    {
        title: 'Searchable accordion',
        path: 'px-searchable-accordion',
        loadComponent: () => import('./docs/px-searchable-accordion-docs/px-searchable-accordion-docs.component').then(c => c.PxSearchableAccordionDocsComponent),
        data: {
            addToSidenav: true,
            icon: 'pi-search'
        }
    },
    {
        title: 'Table',
        path: 'px-table',
        loadComponent: () => import('./docs/px-table-docs/px-table-docs.component').then(c => c.PxTableDocsComponent),
        data: {
            addToSidenav: true,
            icon: 'pi-table'
        }
    },
    {
        title: 'Uploader',
        path: 'px-uploader',
        loadComponent: () => import('./docs/px-uploader-docs/px-uploader-docs.component').then(c => c.PxUploaderDocsComponent),
        data: {
            addToSidenav: true,
            icon: 'pi-upload'
        }
    },
    {
        title: 'Welcome',
        path: '**',
        component: IntroComponent,
        pathMatch: 'full'
    }
];
