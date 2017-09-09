import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticatedService } from './../_services/authenticated.service';
import { Mover } from './../_model/mover';
 
@Injectable()
export class MoverGuard implements CanActivate {
 
    constructor(private router: Router, private authenticatedService: AuthenticatedService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let mover: Mover = this.authenticatedService.getLoggedInMover();
        let roles = mover ? mover.roles : [];
        
        if (roles.indexOf('ROLE_MOVER') !== -1) {
            
            //  console.log('authGuard currentMover: '+JSON.stringify(mover));
            //  logged in so return true
            return true;
            
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
