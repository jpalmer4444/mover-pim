import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertService } from './_services/alert.service';
import { NavbarService } from './_services/navbar.service';
import { UserService } from './_services/user.service';
import { AuthenticatedService } from './_services/authenticated.service';
import { AvailabilityService } from './_services/availability.service';
import { MovingJobService } from './_services/moving-job.service';
import { ReviewService } from './_services/review.service';

import { LocalService } from './_services/local.service';

import {MyMockAvailabilityService, MyMockAuthenticatedService, MyMockMovingJobService, MyMockReviewService, MyMockStorageService, MyMockLocalService, MyMockAlertService, MyMockNavbarService, MyMockUserService } from './_mocks/mocks';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent, 
          AlertComponent, 
          NavbarComponent
      ],
      imports: [
          RouterTestingModule
      ],
      providers: [ 
      { provide: AuthenticatedService, useClass: MyMockAuthenticatedService },
      { provide: AvailabilityService, useClass: MyMockAvailabilityService },
      { provide: MovingJobService, useClass: MyMockMovingJobService },
      { provide: ReviewService, useClass: MyMockReviewService },
      { provide: AlertService, useClass: MyMockAlertService }, 
      { provide: UserService, useClass: MyMockUserService }, 
      { provide: NavbarService, useClass: MyMockNavbarService },
      { provide: LocalService, useClass: MyMockLocalService },
      { provide: LocalStorageService, useClass: MyMockStorageService } 
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  
});
