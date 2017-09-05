import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';
import { LocalService } from './local.service';

import { MyMockLocalService } from './../_mocks/mocks';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [AlertService, {provide: LocalService, useClass: MyMockLocalService} ],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
