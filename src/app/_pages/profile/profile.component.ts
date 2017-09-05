import { Component, OnInit, Injectable } from '@angular/core';

import { LocalService } from './../../_services/local.service';
import { Mover } from './../../_model/mover';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

@Injectable()
export class ProfileComponent implements OnInit {
    
    currentMover: Mover;

  constructor(private localService: LocalService) { }

  ngOnInit() {
      
      this.currentMover = this.localService.getCurrentMover();
  }

}
