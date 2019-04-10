import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  inviteMember(){
    this.onInvite.emit();
  }

}
