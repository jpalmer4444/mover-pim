import {Component, OnInit, Injectable} from '@angular/core';
import {LocalService} from '../../_services/local.service';
import {AlertService} from '../../_services/alert.service';

import {Rating} from '../../_model/rating';
import {GroupMoverRating} from '../../_model/group-mover-rating';
import {GroupService} from '../../_services/group.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

@Injectable()
export class HomeComponent implements OnInit {
    currentMover: any;
    currentMoverRating: Number;
    ratings: Map<string, string> = new Map();
    rating: Rating;
    ratingWidth: string = '200px';

    groupMoversRatings: Array<GroupMoverRating>;

    constructor(
        private groupService: GroupService,
        private alertService: AlertService,
        private localService: LocalService
    ) {}

    ngOnInit() {
        //limit to 100 Movers - review this!
        this.currentMover = this.localService.getCurrentMover();
        this.loadGroupMoversRatings(( ) => {
            this.currentMoverRating = +this.getRatingForMover(this.currentMover.username);
        });
    }
    
    doSomething($event: Event){
        
        console.log('Changed' + $event.target);
    }

    getRatingForMover(username: string): string {
        let rating = this.ratings.get(username);
        return rating;
    }

    private loadGroupMoversRatings(callback: Function) {
        this.groupService.getGroupMoversRatingsByMoverId(this.currentMover.username).subscribe(
            groupMoversRatings => {
                this.groupMoversRatings = groupMoversRatings;
                for (let i = 0; i < this.groupMoversRatings.length; i++) {
                    let gmr: GroupMoverRating = this.groupMoversRatings[i];
                    if (gmr.ratings) {
                        for (let j = 0; j < gmr.ratings.length; j++) {
                            let rating: Rating = gmr.ratings[j];
                            if (rating) {
                                this.ratings.set(rating.username, rating.rating);
                            }
                        }
                    }
                }
                callback();
            },
            error => {
                this.alertService.error('Load GroupMoversRatings: ' + error);
            });
    }


}
