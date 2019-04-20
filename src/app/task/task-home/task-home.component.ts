import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { sliceToRight } from '../../anims/router.anims';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[sliceToRight]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routerAnims') state;
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
    const dialog = this.dialog.open(NewTaskComponent,{data:{'title': '新建任务'}});
  }

  openCopyTaskDialog(){
    const dialog = this.dialog.open(CopyTaskComponent,{data:{'lists': this.lists}})
  }

  onEditTaskClick(task){
    const dialog = this.dialog.open(NewTaskComponent,{data:{'title': '更新任务','task':task}});
  }

  onEditTaskListClick(){
    const dialog = this.dialog.open(NewTaskListComponent,{data:{'title': '新建项目列表'}});
  }

  onTaskListUpdateClick(){
    const dialog = this.dialog.open(NewTaskListComponent,{data:{'title': '修改列表名称'}});
  }

  onTaskListDeleteClick(){
    const dialog = this.dialog.open(ConfirmDialogComponent,{data:{'title': '确认删除','content':'您是否确认删除该列表？'}});
    dialog.afterClosed().subscribe(res=>{console.log(res)});
  }

}
