import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  avatarItems = [];
  constructor() { }

  ngOnInit() {
    this.generateAvatarItems();
  }

  generateAvatarItems() {
    let avatarList = [];
    for (let i = 1; i < 17; i++) {
      avatarList.push(i);
    }
    this.avatarItems = avatarList.map((item)=>{
      return `avatars:svg-${item}`;
    })
  }

}
