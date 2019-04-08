import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleNavBar: EventEmitter<any> = new EventEmitter();
  @Output() toggleThemeMode: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleNavbar(){
    this.toggleNavBar.emit();
  }

  toggleNightMode(event){
    this.toggleThemeMode.emit(event.checked);
  }

}
