import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {

    public isSidenavVisible = false

    constructor() {
    }

    toggleSidenav() {
        this.isSidenavVisible = !this.isSidenavVisible;
    }
}
