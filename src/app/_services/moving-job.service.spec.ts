import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend } from '@angular/http';

import { ConfigurationService } from './../_services/configuration.service';
import { LocalService } from './local.service';
import { HeaderService } from './header.service';

import { MyMockLocalService, MyMockHeaderService, MyMockConfigurationService } from '../_mocks/mocks';

import { MovingJobService } from './moving-job.service';

describe('MovingJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
      providers: [
            MovingJobService,
                {provide: HeaderService, useClass: MyMockHeaderService},
                {provide: ConfigurationService, useClass: MyMockConfigurationService},
                {provide: XHRBackend, useClass: MockBackend},
                {provide: LocalService, useClass: MyMockLocalService}
            ]
    });
  });

  it('should be created', inject([MovingJobService], (service: MovingJobService) => {
    expect(service).toBeTruthy();
  }));
});
