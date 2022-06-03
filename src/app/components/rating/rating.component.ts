import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: [`
    pre {
      color: snow;
      margin: 8px 4px;
    }

    .pre b {
      color: snow;
    }

    .star {
      position: relative;
      display: inline-block;
      font-size: 1rem;
      color: #ffffff;
      margin: 0 0 0 0;
    }

    .full {
      color: #344a54;
    }

    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: #e6ec46;
    }
  `]
})
export class RatingComponent implements OnInit {
  @Input()
  currentRate: number;


  constructor() { }

  ngOnInit(): void {
  }

}
