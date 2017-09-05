import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

import { Mover } from '../_model/mover';
import { AuthenticatedService } from '../_services/authenticated.service';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

@Injectable()
export class NavbarComponent implements OnInit {
    
    subscription: Subscription;
    navbarOpenLink1 = false;
    navbarOpenLink2 = false;
    currentMover : Mover = null;

    constructor(
        private authenticatedService: AuthenticatedService) {
        
    }

    ngOnInit() {
        this.subscription = this.authenticatedService.getMover().subscribe(mover => {
            this.currentMover = mover;
        });
        
    }
    
    logout(){
        this.authenticatedService.logout();
    }
    
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
