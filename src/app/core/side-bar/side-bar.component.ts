import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output()navClick: EventEmitter<void> = new EventEmitter();
  today:string = 'day';
  constructor() { }

  ngOnInit() {
    this.today = 'day' + getDate(new Date());
  }

  onNavClick(){
    this.navClick.emit();
  }

}
