import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'title':'企业内部项目',
      'desc':'这是企业内部项目',
      'coverImg':'assets/imgs/covers/1.jpg'
    },
    {
      'title':'测试项目',
      'desc':'这是一个测试项目',
      'coverImg':'assets/imgs/covers/2.jpg'
    }

  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewDialog(){
    const dialog = this.dialog.open(NewProjectComponent,{data:{ darkMode: true }});
    dialog.afterClosed().subscribe(res=>{console.log(res)});
  }

  inviteMember(){
    const dialog = this.dialog.open(InviteComponent,{data:{ darkMode: true }});
  }

}
