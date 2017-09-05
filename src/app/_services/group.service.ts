import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//rxjs
import { Observable } from 'rxjs/Rx';

import { ConfigurationService } from '../_services/configuration.service';
import { LocalService } from '../_services/local.service';
import { HeaderService } from '../_services/header.service';
import { Group } from '../_model/group';
import { GroupMoverRating } from '../_model/group-mover-rating';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GroupService {

    constructor(
        private http: Http,
        private configurationService: ConfigurationService,
        private headerService: HeaderService,
        private localService: LocalService
    ) {}

    getGroupByMoverId(username: string): Observable<Array<Group>> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password);
        let url = this.configurationService.getServiceUrl() + '/group?mover=' + username + '&start=0&end=100';
        return this.http.get(url, {headers: headers})
            .map((res: Response) => res.json());
    }
    
    getGroupMoversRatingsByMoverId(username: string): Observable<Array<GroupMoverRating>> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password);
        let url = this.configurationService.getServiceUrl() + '/group/movers/ratings?username=' + username;
        return this.http.get(url, {headers: headers})
            .map((res: Response) => res.json());
    }

}
