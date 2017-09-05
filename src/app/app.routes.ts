import { Routes } from '@angular/router';

// components
import { AdminComponent } from './_pages/admin/admin.component';
import { GroupComponent } from './_pages/group/group.component';
import { GroupSearchComponent } from './_pages/group-search/group-search.component';
import { HomeComponent } from './_pages/home/home.component';
import { JobComponent } from './_pages/job/job.component';
import { JobSearchComponent } from './_pages/job-search/job-search.component';
import { LoginComponent } from './_pages/login/login.component';
import { MarketingComponent } from './_pages/marketing/marketing.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { RegisterComponent } from './_pages/register/register.component';
import { RecentJobsComponent } from './_pages/recent-jobs/recent-jobs.component';

// guards
import { AuthGuard } from './_guard/auth.guard';


export const ROUTES: Routes = [
        
    // Home page
    // Driver can rate and/or schedule movers and see recent jobs.
    // Mover can set availability and see recent jobs.
    { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
    
    // Login Page
    // Driver, Mover Admin can all login
    { path: 'login', component: LoginComponent },
    
    // Marketing Page
    // Anyone can see the marketing page
    // Just markets the service (app)
    { path: 'marketing', component: MarketingComponent },
    
    // Register Page
    // Anyone can register provided one of the 2 following requirements is met:
    // 1. The person registering is a Group Leader and will be creating a new
    //    group for which they will be the only participant.
    // 
    // 2. The person registering was sent an invite and has a valid token to
    //    join an existing group.
    { path: 'register', component: RegisterComponent },
    
    // Recent Jobs Page
    // Driver can
    // Mover can
    { path: 'recentjobs', component: RecentJobsComponent, canActivate: [ AuthGuard ] },
    
    // Admin Page
    // Driver cannot see
    // Mover cannot see
    // Admin can
    { path: 'admin', component: AdminComponent, canActivate: [ AuthGuard ] },
    
    // GroupSearch Page
    // Driver can
    // Mover can
    { path: 'groupsearch', component: GroupSearchComponent, canActivate: [ AuthGuard ] },
    
    // JobSearch Page
    // Driver can
    // Mover can
    { path: 'jobsearch', component: JobSearchComponent, canActivate: [ AuthGuard ] },
    
    // Group Page
    // Driver can
    // Mover can
    { path: 'group', component: GroupComponent, canActivate: [ AuthGuard ] },
    
    // Job Page
    // Driver can
    // Mover can
    { path: 'job', component: JobComponent, canActivate: [ AuthGuard ] },
    
    // Profile Page
    // Driver can
    // Mover can
    { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];
