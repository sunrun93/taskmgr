import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
