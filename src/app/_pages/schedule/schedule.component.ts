import {Component, OnInit, OnDestroy} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
    animations: [
        trigger('myScheduleWizardAnimation', [
            state('small',
                style({
                    transform: 'scale(1)',
                })),
            state('large',
                style({
                    transform: 'scale(1.2)',
                })),
            transition('small => large',
                animate('100ms ease-in')
            ),
        ]),
    ]
})

export class ScheduleComponent implements OnInit, OnDestroy {

    numberMovers: Boolean;
    numberPounds: Boolean;

    constructor() {}

    ngOnInit() {}

    ngOnDestroy() {}

}
