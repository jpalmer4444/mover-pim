import { Component, OnInit, Injectable } from '@angular/core';
import { MovingJob } from './../../_model/moving-job';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.scss']
})

@Injectable()
export class RecentJobsComponent implements OnInit {
    
    recentJobs: Array<MovingJob> = [];

  constructor() { }

  ngOnInit() {
      //query for jobs
  }

}
