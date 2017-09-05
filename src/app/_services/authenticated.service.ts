import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

//rx
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Mover } from '../_model/mover';
import { LocalService } from '../_services/local.service';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';

@Injectable()
export class AuthenticatedService {

    private subject = new Subject<Mover>();

    constructor(
        private router: Router,
        private localService: LocalService,
        private localStorageService: LocalStorageService,
        private userService: UserService,
        private alertService: AlertService) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let curMover = this.localService.getCurrentMover();
                this.subject.next(curMover);
            }
        });
    }

    getMover(): Observable<Mover> {
        return this.subject.asObservable();
    }

    logout() {
        this.localStorageService.remove("currentMover");
        this.subject.next();
    }

    private navTo(context: string) {
        this.router.navigate([context ? context : '/']);
    }

    private setMoverLocal(mover: any) {
        this.localStorageService.set("currentMover", mover);
    }

    loginLocal(mover: any, returnUrl?: string) {
        this.setMoverLocal(mover);
        this.subject.next(mover);
        this.navTo(returnUrl);
    }

    login(mover: any, returnUrl?: string) {
        this.userService.login(mover.username, mover.password)
            .subscribe(
            data => {
                //the password is encrypted on the backend and not returned
                //by the REST service
                data.password = mover.password;
                this.loginLocal(data, returnUrl);
            },
            error => {
                this.alertService.error(error);
                this.logout();
            });
    }

}
