import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Mover } from '../_model/mover';
import { Observable } from 'rxjs/Rx';
import { ConfigurationService } from '../_services/configuration.service';
import { LocalService } from '../_services/local.service';
import { HeaderService } from '../_services/header.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private configurationService: ConfigurationService,
        private headerService: HeaderService,
        private localService: LocalService) {
    }

    getMover(id: string): Observable<Mover> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password);
        return this.http.get(this.configurationService.getServiceUrl() + '/mover?mover=' + id, { headers: headers })
            .map((res: Response) => res.json());
    }

    getMoversByGroup(start: number, end: number, group: string): Observable<Array<Mover>> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password); 
        return this.http.get(this.configurationService.getServiceUrl() + '/mover/group?start=' + start + '&end=' + end + '&group=' + group, { headers: headers })
            .map((res: Response) => res.json());
    }

    //no Authorization headers needed here.
    login(username: string, password: string): Observable<Mover> {
        let url = this.configurationService.getServiceUrl() + '/mover/login?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(response => response.json());
    }

    getMoverByUsernameAndPassword(username: string, password: string): Observable<Mover> {
        let mover: any = this.localService.getCurrentMover();
        let headers = this.headerService.createAuthorizationHeader(mover.username, mover.password); 
        return this.http.get(this.configurationService.getServiceUrl() + '/mover?username=' + username + '&password=' + password, { headers: headers })
            .map((res: Response) => res.json());
    }


}
