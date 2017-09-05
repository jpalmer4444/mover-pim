import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Mover } from './../_model/mover';

@Injectable()
export class LocalService {

  constructor(private localStorageService: LocalStorageService) { }
  
  getCurrentMover(): Mover {
        let mover: any = this.localStorageService.get("currentMover");
        return mover;
    }

}
