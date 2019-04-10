import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  items = [
    { name: '张三', id: 1 },
    { name: '李四', id: 1 },
    { name: '王五', id: 1 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
