import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ConfigurationService } from './configuration.service';
import { Mover } from './../_model/mover';
import { UserService } from './user.service';
import { HeaderService } from './header.service';
import { LocalService } from './local.service';

import {
    MyMockUserService,
    MyMockHeaderService,
    MyMockLocalService,
    MyMockConfigurationService,
    _MOVER
} from '../_mocks/mocks';

const mockMover = _MOVER;

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                {
                    provide: ConfigurationService, useClass: MyMockConfigurationService
                },
                {
                    provide: HeaderService, useClass: MyMockHeaderService
                },
                {
                    provide: UserService, useClass: MyMockUserService
                },
                {
                    provide: XHRBackend, useClass: MockBackend
                },
                {provide: LocalService, useClass: MyMockLocalService}
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
