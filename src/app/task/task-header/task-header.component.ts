import { Component, OnInit, Input, Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTask: EventEmitter<any> = new EventEmitter();
  @Output() moveTask: EventEmitter<any> = new EventEmitter();
  @Output() updateTaskList: EventEmitter<any> = new EventEmitter();
  @Output() deleteTaskList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewTask(){
    this.newTask.emit();
  }

  onMoveAll(){
    this.moveTask.emit();
  }

  onUpdateClick(){
    this.updateTaskList.emit();
  }

  onDelectAll(){
    this.deleteTaskList.emit();
  }
}
