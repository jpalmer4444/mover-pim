import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { ConfigurationService } from '../../_services/configuration.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserService } from '../../_services/user.service';
import { AlertService } from '../../_services/alert.service';
import { HeaderService } from '../../_services/header.service';
import { LocalService } from '../../_services/local.service';
import { GroupService } from '../../_services/group.service';
import { ReviewService } from '../../_services/review.service';
import { LocalStorageService } from 'angular-2-local-storage';
import {
    MyMockStorageService,
    MyMockAlertService,
    MyMockReviewService,
    MyMockHeaderService,
    MyMockLocalService,
    MyMockConfigurationService,
    MyMockGroupService,
    MyMockUserService
} from '../../_mocks/mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [HttpModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
            providers: [
                {
                    provide: LocalService, useClass: MyMockLocalService
                },
                {
                    provide: HeaderService, useClass: MyMockHeaderService
                },
                {
                    provide: ConfigurationService, useClass: MyMockConfigurationService
                },
                {
                    provide: AlertService, useClass: MyMockAlertService
                },
                {
                    provide: GroupService, useClass: MyMockGroupService
                },
                {
                    provide: XHRBackend, useClass: MockBackend
                },
                {provide: LocalStorageService, useClass: MyMockStorageService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
