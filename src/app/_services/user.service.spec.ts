import {TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {Mover} from './../_model/mover';
import {MockBackend} from '@angular/http/testing';
import {ConfigurationService} from './configuration.service';

import {UserService} from './user.service';

const mockMover = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'jdoe',
    memberSince: new Date(),
    years: -1,
    months: -1
};

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [UserService, ConfigurationService,
                {
                    provide: XHRBackend, useClass: MockBackend
                }
            ]
        });
    });

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    // getMover(id)
    describe('getMover(id)', () => {
        it('should return Observable<Mover>', inject([UserService, XHRBackend], (userService: UserService, mockBackend) => {
            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockMover)
                })));
            });
            userService.getMover('-1').subscribe((mover: Mover) => {
                expect(mover.firstName).toEqual(mockMover.firstName);
                expect(mover.lastName).toEqual(mockMover.lastName);
                expect(mover.username).toEqual(mockMover.username);
                expect(mover.years).toEqual(mockMover.years);
                expect(mover.months).toEqual(mockMover.months);
            });
        }));
    });

    // getMoverByUsernameAndPassword
    describe('getMoverByUsernameAndPassword(username, password)', () => {
        it('should return Observable<Mover>', inject([UserService, XHRBackend], (userService: UserService, mockBackend) => {
            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockMover)
                })));
            });
            userService.getMoverByUsernameAndPassword('jdoe', 'password').subscribe((mover: Mover) => {
                expect(mover.firstName).toEqual(mockMover.firstName);
                expect(mover.lastName).toEqual(mockMover.lastName);
                expect(mover.username).toEqual(mockMover.username);
                expect(mover.years).toEqual(mockMover.years);
                expect(mover.months).toEqual(mockMover.months);
            });
        }));
    });
});
