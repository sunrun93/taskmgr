import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  today:string = 'day';
  constructor() { }

  ngOnInit() {
    this.today = 'day' + getDate(new Date());
  }

}
