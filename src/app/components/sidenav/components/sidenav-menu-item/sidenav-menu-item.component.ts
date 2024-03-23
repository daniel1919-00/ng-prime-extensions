import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {menuItem} from "../../sidenav";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-sidenav-menu-item',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive],
    templateUrl: './sidenav-menu-item.component.html',
    styleUrls: ['./sidenav-menu-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavMenuItemComponent {
    @Input() item!: menuItem;
}
