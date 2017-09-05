import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { ConfigurationService } from './../_services/configuration.service';
import { MockBackend } from '@angular/http/testing';

import { LocalService } from './local.service';
import { HeaderService } from './header.service';

import { MyMockLocalService, MyMockHeaderService, MyMockConfigurationService } from '../_mocks/mocks';

import { ReviewService } from './review.service';

describe('ReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
      providers: [
            ReviewService,
                {provide: HeaderService, useClass: MyMockHeaderService},
                {provide: ConfigurationService, useClass: MyMockConfigurationService},
                {provide: XHRBackend, useClass: MockBackend},
                {provide: LocalService, useClass: MyMockLocalService}
            ]
    });
  });

  it('should be created', inject([ReviewService], (service: ReviewService) => {
    expect(service).toBeTruthy();
  }));
});
