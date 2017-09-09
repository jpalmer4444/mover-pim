import {Component, OnInit, OnDestroy, Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {AuthenticatedService} from './../../_services/authenticated.service';
import {Mover} from './../../_model/mover';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

@Injectable()
export class ProfileComponent implements OnInit, OnDestroy {

    currentMover: Mover;

    constructor(private authenticatedService: AuthenticatedService) {}

    ngOnInit() {
        
        this.currentMover = this.authenticatedService.getLoggedInMover();

    }

    ngOnDestroy() {
    }

}
