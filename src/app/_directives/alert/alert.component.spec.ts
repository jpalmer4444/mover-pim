import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterTestingModule} from '@angular/router/testing';
import {ConfigurationService} from '../../_services/configuration.service';
import {HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {UserService} from '../../_services/user.service';
import {AlertService} from '../../_services/alert.service';

import {
    MyMockAlertService,
    MyMockConfigurationService,
    MyMockUserService
} from '../../_mocks/mocks';

import {AlertComponent} from './alert.component';

describe('AlertComponent', () => {

    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlertComponent],
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
                    provide: XHRBackend, useClass: MockBackend
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
