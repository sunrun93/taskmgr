import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { promise } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  avatarItems = [];
  private readonly avatarName = 'avatars';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${Math.floor(Math.random()*16).toFixed(0)}`;
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.avatarItems = nums.map((item)=>{
      return `avatars:svg-${item}`;
    });
    this.form = this.fb.group({
      email:[],
      name:[],
      password:[],
      repeat:[],
      avatar:[img]
    })
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

  onSubmit({value, valid}, ev: Event){

  }

  private testPromise(){
    new Promise(()=>{
      console.log(1);
    })
    .then(()=>{
      return new Promise(()=>{
        console.log(2);
      })
    })
    .then(()=>{
      return new Promise(()=>{
        console.log(2);
      })
    })
    .catch()
  }


