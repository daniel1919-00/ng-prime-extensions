import {Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgClass} from "@angular/common";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {AppService} from "./services/app.service";
import {ButtonModule} from "primeng/button";
import {SidenavService} from "./services/sidenav.service";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgClass, SidenavComponent, ButtonModule, AsyncPipe, ToastModule],
    providers: [MessageService],
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
