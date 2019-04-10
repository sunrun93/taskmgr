import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode = false;

  constructor(private oc: OverlayContainer){

  }
  toggleThemeMode(event){
    this.darkMode = event;
    if(this.darkMode){
      this.oc.getContainerElement().classList.add('unicorn-dark-theme');
    }
  }
}
