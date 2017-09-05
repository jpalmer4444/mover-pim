import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ConfigurationService} from '../../_services/configuration.service';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {UserService} from '../../_services/user.service';
import {AlertService} from '../../_services/alert.service';
import {NavbarService} from '../../_services/navbar.service';
import {LocalService} from '../../_services/local.service';
import {LocalStorageService} from 'angular-2-local-storage';
import {
    MyMockStorageService,
    MyMockLocalService,
    MyMockNavbarService,
    MyMockAlertService,
    MyMockConfigurationService,
    MyMockUserService
} from '../../_mocks/mocks';

import { JobSearchComponent } from './job-search.component';

describe('JobSearchComponent', () => {
  let component: JobSearchComponent;
  let fixture: ComponentFixture<JobSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSearchComponent ],
      imports: [HttpModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
            providers: [
                {
                    provide: UserService, useClass: MyMockUserService
                },
                {
                    provide: ConfigurationService, useClass: MyMockConfigurationService
                },
                {
                    provide: AlertService, useClass: MyMockAlertService
                },
                {
                    provide: NavbarService, useClass: MyMockNavbarService
                },
                {
                    provide: LocalService, useClass: MyMockLocalService
                },
                {
                    provide: XHRBackend, useClass: MockBackend
                },
                {
                    provide: LocalStorageService, useClass: MyMockStorageService
                }
            ]
        })
            .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
