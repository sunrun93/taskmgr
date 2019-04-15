import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  @Output() editTask:EventEmitter<any> = new EventEmitter();;
  avatar = '';

  constructor() { }

  ngOnInit() {
    this.avatar = this.task.owner ? this.task.owner.avatar : 'unassigned';
  }

  onEditClick(){
    this.editTask.emit(this.task);
  }

  onCheckboxClick(ev:Event){
    ev.stopPropagation();
  }

}
