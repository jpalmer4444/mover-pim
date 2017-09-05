import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'angular-2-local-storage';

import { LocalService } from './local.service';
import { UserService } from './user.service';
import { AlertService } from './alert.service';

import { MyMockLocalService, MyMockStorageService, MyMockUserService, MyMockAlertService } from '../_mocks/mocks';

import { AuthenticatedService } from './authenticated.service';

describe('AuthenticatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedService,
      { provide: LocalService, useClass: MyMockLocalService },
      { provide: UserService, useClass: MyMockUserService },
      { provide: LocalStorageService, useClass: MyMockStorageService },
      { provide: AlertService, useClass: MyMockAlertService }
      ],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([AuthenticatedService], (service: AuthenticatedService) => {
    expect(service).toBeTruthy();
  }));
});
