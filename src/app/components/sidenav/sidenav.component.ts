import {Component, Input, ViewChild} from '@angular/core';
import {Sidebar, SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {SidenavMenuItemComponent} from "./components/sidenav-menu-item/sidenav-menu-item.component";
import {menuItem} from "./sidenav";
import {routes} from "../../app.routes";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [
        CommonModule,
        SidebarModule,
        ButtonModule,
        RippleModule,
        StyleClassModule,
        SidenavMenuItemComponent
    ],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    @Input() isMobileDevice = false;

    sidebarVisible: boolean = true;

    menuItems: menuItem[];

    constructor() {
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
    }
}
