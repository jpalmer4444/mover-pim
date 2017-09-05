import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class HeaderService {

  constructor() { }
  
  createAuthorizationHeader(username: string, password: string) : Headers {
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
        return headers;
    }

}
