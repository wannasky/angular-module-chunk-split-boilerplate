import {Component} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html'
})
export class OneComponent {

  constructor() {
    console.log('d3::', d3);
  }
}
