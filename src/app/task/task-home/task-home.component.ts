import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

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
          completed:true,
          owner:{
            id:1,
            name:'张三',
            avatar:'avatars:svg-11'
          },
          dueDate: new Date(),
          remainder:true,
          priority:1
        },
        {
          id:2,
          desc:'这是第二个任务',
          completed:false,
          owner:{
            id:1,
            name:'李四',
            avatar:'avatars:svg-12'
          },
          dueDate: new Date(),
          remainder:true,
          priority:2
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
          completed:false,
          owner:{
            id:1,
            name:'王五',
            avatar:'avatars:svg-13'
          },
          dueDate: new Date(),
          remainder:false,
          priority:3
        },
        {
          id:4,
          desc:'这是第四个任务',
          completed:true,
          owner:{
            id:1,
            name:'毛毛',
            avatar:'avatars:svg-14'
          },
          dueDate: new Date(),
          remainder:true,
          priority:1
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewTaskDialog(){
    this.dialog.open(NewTaskComponent);
  }

  openCopyTaskDialog(){
    const dialog = this.dialog.open(CopyTaskComponent,{data:{'lists': this.lists}})
  }

}
