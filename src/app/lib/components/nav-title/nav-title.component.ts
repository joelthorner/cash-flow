import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cf-nav-title',
  templateUrl: './nav-title.component.html',
  styleUrls: ['./nav-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavTitleComponent implements OnInit {
  title = 'Cash Flow';

  constructor() { }

  ngOnInit() {
  }

}
