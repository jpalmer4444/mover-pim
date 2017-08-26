import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

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
        LoginComponent
    ],
    imports: [
        BrowserModule, 
        HttpModule, 
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        {
            provide: Http, useFactory: myFactory,
            deps: [
                XHRBackend, RequestOptions
            ]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
