import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigurationService } from '../../_services/configuration.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserService } from '../../_services/user.service';
import { AlertService } from '../../_services/alert.service';
import { HeaderService } from '../../_services/header.service';
import { AuthenticatedService } from '../../_services/authenticated.service';
import {
    MyMockUserService,
    MyMockAlertService,
    MyMockHeaderService,
    MyMockStorageService,
    MyMockConfigurationService
} from '../../_mocks/mocks';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
            providers: [
            AuthenticatedService,
                {
                    provide: ConfigurationService, useClass: MyMockConfigurationService
                },
                {
                    provide: HeaderService, useClass: MyMockHeaderService
                },
                {
                    provide: AlertService, useClass: MyMockAlertService
                },
                {
                    provide: LocalStorageService, useClass: MyMockStorageService
                },
                {
                    provide: XHRBackend, useClass: MockBackend
                },
                {
                    provide: UserService, useClass: MyMockUserService
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
