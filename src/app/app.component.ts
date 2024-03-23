import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass} from "@angular/common";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {AppService} from "./services/app.service";
import {ButtonModule} from "primeng/button";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgClass, SidenavComponent, ButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    isMobileDevice = false;

    constructor(
        protected readonly appService: AppService
    ) {
    }

    toggleDarkMode() {
        this.appService.toggleDarkMode();
    }
}
