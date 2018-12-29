import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  now = moment().format();
  tomorrow = moment()
    .add(1, 'days')
    .format();

  constructor() { }

  ngOnInit() {
  }

}
