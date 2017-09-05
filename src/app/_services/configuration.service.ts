import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigurationService {

  constructor() { }

  getServiceUrl(): string {
        return environment.serviceurl;
     }
     
  getServerErrorMessage(): string {
        return environment.servererror;
     }

}
