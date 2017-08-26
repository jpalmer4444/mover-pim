import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Mover} from '../_model/mover';
import {Observable} from 'rxjs/Rx';
import {ConfigurationService} from '../_services/configuration.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const SERVER_ERROR = 'Server Error';

@Injectable()
export class UserService {

    constructor(
        private http: Http, 
        private configurationService: ConfigurationService ) {
        }

     getMover(id: string): Observable<Mover> {
         let args = new RequestOptions(new URLSearchParams('mover=' + id));
         return this.http.get(this.configurationService.getServiceUrl() + '/mover', args)
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || SERVER_ERROR));
     }

     getMoverByUsernameAndPassword(username: string, password: string): Observable<Mover> {
         let args = new RequestOptions(new URLSearchParams('username=' + username + '?password=' + password));
         return this.http.get(this.configurationService.getServiceUrl() + '/mover', args)
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || SERVER_ERROR));
     }


}
