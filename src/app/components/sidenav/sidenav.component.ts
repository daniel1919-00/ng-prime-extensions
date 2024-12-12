import {Component, OnDestroy} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {SidenavMenuItemComponent} from "./components/sidenav-menu-item/sidenav-menu-item.component";
import {menuItem} from "./sidenav";
import {routes} from "../../app.routes";
import {CommonModule} from "@angular/common";
import {SidenavService} from "../../services/sidenav.service";
import {AppService} from "../../services/app.service";
import {Subject} from "rxjs";
import {Drawer} from "primeng/drawer";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        RippleModule,
        StyleClassModule,
        SidenavMenuItemComponent,
        Drawer
    ],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnDestroy {
    protected menuItems: menuItem[];
    protected isMobileDevice = false;

    private componentDestroyed$ = new Subject<void>();

    constructor(
        protected sidenavService: SidenavService,
        private appService: AppService
    ) {
        const menuItems: menuItem[] = [];

        for (let i = routes.length; i--;) {
            const route = routes[i];
            route.data && route.data['addToSidenav'] && menuItems.push({
                title: route.title as string,
                path: route.path as string,
                icon: route.data['icon']
            });
        }

        this.menuItems = menuItems.sort();

        this.appService.isViewportMobileSize.subscribe(isMobileSize => {
            this.isMobileDevice = isMobileSize;
            this.sidenavService.isSidenavVisible = !isMobileSize;
        });
    }

    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
