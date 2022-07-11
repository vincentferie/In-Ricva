import { Component, OnInit } from '@angular/core';
import { navItems } from '../menu/_nav';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  minimized = false;
  public navItems = [...navItems];
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {

  };

  toggleMinimize(e) {
    this.minimized = e;
  }
}
