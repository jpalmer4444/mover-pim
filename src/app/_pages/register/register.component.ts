import { Component, OnInit, Injectable } from '@angular/core';

import { LocalService } from './../../_services/local.service';
import { Mover } from './../../_model/mover';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

@Injectable()
export class RegisterComponent implements OnInit {
    
    currentMover: Mover;

  constructor(private localService: LocalService) { }

  ngOnInit() {
      this.currentMover = this.localService.getCurrentMover();
  }

}
