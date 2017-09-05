import { Mover } from './../_model/mover';
import { Group } from './../_model/group';
import { Rating } from './../_model/rating';
import { GroupMoverRating } from './../_model/group-mover-rating';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';

//////////////////////////////
//
// Classes
//
//////////////////////////////

export class MyMockAuthenticatedService{
    constructor(){}
}

export class MyMockAvailabilityService{
    constructor(){}
}

export class MyMockMovingJobService{
    constructor(){}
}

export class MyMockReviewService{
    constructor(){}
    getRating(): any{
        return {
            subscribe: function(){}
        };
    }

    getReviewsByMover(start: number, end: number): any {
        return {
            subscribe: function(){}
        };
    }
}

export class MyMockStorageService {
    constructor() {}
    get(key: string) {
        return _MOVER;
    }
    set(key: string, value: any) {}
    remove(key: string) {}
}

export class MyMockLocalService {
    constructor() {}
    getCurrentMover(): any {
        let cloned = JSON.parse(JSON.stringify(_MOVER));
        return _MOVER;
    }

    logout(): void {

    }
}

export class MyMockNavbarService {
    constructor() {}
}

export class MyMockAlertService {
    message: string;
    constructor() {}
    success(message, keepAfterNavigationChange){
        this.message = message;
    }
    error(message, keepAfterNavigationChange){
        this.message = message;
    }
    getMessage(){
        return Observable.of(this.message);
    }
}

export class MyMockConfigurationService {
    constructor() {}
    getServiceUrl(): string {
        return 'localhost';
     }
     
  getServerErrorMessage(): string {
        return 'Server Error!';
     }
}

export class MyMockGroupService {
    constructor(
    ) {}
    getGroupByMoverId(username: string): Observable<Array<Group>> {
        let cloned = JSON.parse(JSON.stringify(_GROUP));
        let argv = [cloned];
        return Observable.of([_GROUP]);
    }
    getGroupMoversRatingsByMoverId(username: string): Observable<Array<GroupMoverRating>> {
        return Observable.of([_GROUP_MOVER_RATING]);
    }
}

export class MyMockHeaderService {
    constructor() {}
    createAuthorizationHeader(username: string, password: string) : Headers {
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
        return headers;
    }
}

export class MyMockUserService {
    constructor() {}
    getMover(id: string): Observable<Mover> {
        let cloned = JSON.parse(JSON.stringify(_MOVER));
        return Observable.of(cloned);
    }

    getMoversByGroup(start: number, end: number, group: string): Observable<Array<Mover>> {
        let cloned = JSON.parse(JSON.stringify(_MOVER));
        let argv = [cloned];
        return Observable.of(argv);
    }
    
    logout(): void {
    }

    //no Authorization headers needed here.
    login(username: string, password: string): Observable<Mover> {
        let cloned = JSON.parse(JSON.stringify(_MOVER));
        return Observable.of(cloned);
    }

    getMoverByUsernameAndPassword(username: string, password: string): Observable<Mover> {
        let cloned = JSON.parse(JSON.stringify(_MOVER));
        return Observable.of(cloned);
    }
}


//////////////////////////////
//
// Constants
//
//////////////////////////////

let mover = new Mover();
mover.firstName = 'TestFirst';
mover.lastName = 'TestLast';
mover.username = 'username';
mover.password = 'password';
mover.memberSince = new Date();
mover.years = 1;
mover.months = 1;
mover.roles = ['ROLE_MOVER'];

let group = new Group();
group.id = 'ID__1';
group.name = 'Group 1';
group.city = 'Plainfield';
group.state = 'IL';
group.moverIds = ['mover', 'driver', 'jpalmer'];
group.ownerId = 'jpalmer';

export const _MOVER: Mover = mover;

export const _GROUP: Group = group;

export const _RATING: Rating = {
    username:'mover',
    rating:'6.75'
}

export const _GROUP_MOVER_RATING: GroupMoverRating = {
    group: _GROUP,
    movers: [_MOVER],
    ratings: [_RATING]
}