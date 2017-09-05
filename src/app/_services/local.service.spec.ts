import { TestBed, inject } from '@angular/core/testing';
import { LocalStorageService } from 'angular-2-local-storage';

import { MyMockStorageService, MyMockLocalService } from '../_mocks/mocks';

import { LocalService } from './local.service';

describe('LocalService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: LocalService, useClass: MyMockLocalService },
                { provide: LocalStorageService, useClass: MyMockStorageService }
            ]
        });
    });

    it('should be created', inject([LocalService], (service: LocalService) => {
        expect(service).toBeTruthy();
    }));
});
