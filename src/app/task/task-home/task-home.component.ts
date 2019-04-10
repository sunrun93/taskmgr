import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id:1,
      name:'待办',
      task:[
        {
          id:1,
          desc:'这是第一个任务',
          owner:{
            id:1,
            name:'张三',
            avatar:'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id:2,
          desc:'这是第二个任务',
          owner:{
            id:1,
            name:'李四',
            avatar:'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id:2,
      name:'待审批',
      task:[
        {
          id:3,
          desc:'这是第三个任务',
          owner:{
            id:1,
            name:'王五',
            avatar:'avatars:svg-13'
          },
          dueDate: new Date()
        },
        {
          id:4,
          desc:'这是第四个任务',
          owner:{
            id:1,
            name:'毛毛',
            avatar:'avatars:svg-14'
          },
          dueDate: new Date()
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
