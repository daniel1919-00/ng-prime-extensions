import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgClass} from "@angular/common";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {AppService} from "./services/app.service";
import {ButtonModule} from "primeng/button";
import {SidenavService} from "./services/sidenav.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgClass, SidenavComponent, ButtonModule, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(
        protected readonly appService: AppService,
        protected readonly sidenavService: SidenavService
    ) {
    }
}
