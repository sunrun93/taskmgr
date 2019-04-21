import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { sliceToRight } from '../../anims/router.anims';
import { ListAnim } from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:[ sliceToRight, ListAnim ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routerAnims') state;
  projects = [
    {
      'id':1,
      'title':'企业内部项目',
      'desc':'这是企业内部项目',
      'coverImg':'assets/imgs/covers/1.jpg'
    },
    {
      'id':2,
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
    dialog.afterClosed().subscribe(res=>{
      console.log(res)
      let newProject = [{
        'id':3,
        'title':'这是一个新项目',
        'desc':'这是一个新项目',
        'coverImg':'assets/imgs/covers/7.jpg'
      }, {
        'id':4,
        'title':'这是又一个新项目',
        'desc':'这是又一个新项目',
        'coverImg':'assets/imgs/covers/8.jpg'
      }];
      this.projects = [...this.projects,...newProject]
      
    });
  }

  inviteMember(){
    const dialog = this.dialog.open(InviteComponent,{data:{ darkMode: true }});
  }

  deleteProject(project){
    console.log(project);
    this.projects = this.projects.filter(x=>{
      return x.id !== project.id;
    })
  }
}
