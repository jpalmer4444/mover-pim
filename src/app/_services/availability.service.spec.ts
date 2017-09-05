import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ConfigurationService } from './../_services/configuration.service';
import { LocalService } from './local.service';
import { HeaderService } from './header.service';

import { MyMockLocalService, MyMockHeaderService, MyMockConfigurationService } from '../_mocks/mocks';

import { AvailabilityService } from './availability.service';

describe('AvailabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
      providers: [
            AvailabilityService,
                {provide: HeaderService, useClass: MyMockHeaderService},
                {provide: ConfigurationService, useClass: MyMockConfigurationService},
                {provide: XHRBackend, useClass: MockBackend},
                {provide: LocalService, useClass: MyMockLocalService}
            ]
    });
  });

  it('should be created', inject([AvailabilityService], (service: AvailabilityService) => {
    expect(service).toBeTruthy();
  }));
});
