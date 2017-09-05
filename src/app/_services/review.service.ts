import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Review } from '../_model/review';
import { Rating } from '../_model/rating';
import { Observable } from 'rxjs/Rx';
import { ConfigurationService } from '../_services/configuration.service';
import { LocalService } from '../_services/local.service';
import { HeaderService } from '../_services/header.service';

@Injectable()
export class ReviewService {
//323432
    constructor(
        private http: Http,
        private configurationService: ConfigurationService,
        private headerService: HeaderService,
        private localService: LocalService) {}

    getRating(): Observable<Rating> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password);
        return this.http.get(this.configurationService.getServiceUrl() + '/review/rating?username=' + mover.username, { headers: headers })
            .map((res: Response) => res.json());
    }

    getReviewsByMover(start: number, end: number): Observable<Array<Review>> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password);
        return this.http.get(this.configurationService.getServiceUrl() + '/review/mover?start=' + start + '&end=' + end + '&username=' + mover.username, { headers: headers })
            .map((res: Response) => res.json());
    }

}
