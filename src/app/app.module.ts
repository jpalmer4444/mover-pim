import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

//Services
import { UserService } from './_services/user.service';
import { NavbarService } from './_services/navbar.service';
import { HeaderService } from './_services/header.service';
import { GroupService } from './_services/group.service';
import { LocalService } from './_services/local.service';
import { AlertService } from './_services/alert.service';
import { ConfigurationService } from './_services/configuration.service';
import { AuthenticatedService } from './_services/authenticated.service';
import { AvailabilityService } from './_services/availability.service';
import { ReviewService } from './_services/review.service';
import { MovingJobService } from './_services/moving-job.service';

//Guards
import { AuthGuard } from './_guard/auth.guard';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './_pages/login/login.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { HomeComponent } from './_pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecentJobsComponent } from './_pages/recent-jobs/recent-jobs.component';
import { MarketingComponent } from './_pages/marketing/marketing.component';
import { GroupSearchComponent } from './_pages/group-search/group-search.component';
import { JobSearchComponent } from './_pages/job-search/job-search.component';
import { GroupComponent } from './_pages/group/group.component';
import { JobComponent } from './_pages/job/job.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { AdminComponent } from './_pages/admin/admin.component';
import { RegisterComponent } from './_pages/register/register.component';
import { RatingComponent } from './_directives/rating/rating.component';
import { InlineEditComponent } from './_directives/inline-edit-component/inline-edit-component.component';

//Routes
import { ROUTES } from './app.routes';

// This export function is needed to avoid static analysis failures during testing
// after running ng lint 1 time:
//  "ERROR in Error encountered resolving symbol values statically. Reference to a non-exported 
//  function (position 7:10 in the original .ts file), resolving symbol AppModule in 
// /u/local/jasonpalmer/mover-pim/src/app/app.module.ts"
export function myFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
    return new Http(backend, defaultOptions);
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AlertComponent,
        HomeComponent,
        NavbarComponent,
        RecentJobsComponent,
        MarketingComponent,
        GroupSearchComponent,
        JobSearchComponent,
        GroupComponent,
        JobComponent,
        ProfileComponent,
        AdminComponent,
        RegisterComponent,
        RatingComponent,
        InlineEditComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        LocalStorageModule.withConfig({
            prefix: 'mover-pim',
            storageType: 'localStorage'
        }),
        BrowserAnimationsModule
    ],
    providers: [
        ConfigurationService, 
        UserService, 
        AlertService,
        HeaderService,
        LocalService,
        AuthGuard,
        NavbarService,
        GroupService, 
        AuthenticatedService,
        AvailabilityService,
        ReviewService,
        MovingJobService,
        {
            provide: Http, useFactory: myFactory,
            deps: [
                XHRBackend, RequestOptions
            ]
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
