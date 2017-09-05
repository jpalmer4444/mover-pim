import {Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../_services/alert.service';
import { UserService } from '../../_services/user.service';
import { AuthenticatedService } from '../../_services/authenticated.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
@Injectable()
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authenticatedService: AuthenticatedService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticatedService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.userService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    data.password = this.model.password;
                    this.authenticatedService.login(data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
