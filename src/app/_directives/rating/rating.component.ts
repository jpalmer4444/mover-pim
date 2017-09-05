import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    
    @Input() 
    public rating: number;
    
    @Input() 
    public username: string;
    
    @Input() 
    public width: string;
    
    @Input() 
    public borderStyle: string = 'solid';
    
    @Input() 
    public styleClass: string = 'rating-info';
    
    @Input() 
    public height: string = '';
    
    public multiplier: number = 10;
    
    public range: any = {
        
        success: {
            lower: 75,
            upper: 100
        },
        info: {
            lower: 50,
            upper: 75
        }
        ,
        warning: {
            lower: 25,
            upper: 50
        },
        danger: {
            lower: 0,
            upper: 25
        }
    };

  constructor() { }

  ngOnInit() {
      
      if (!this.rating){
          this.rating = 0;
      }
  }

}
