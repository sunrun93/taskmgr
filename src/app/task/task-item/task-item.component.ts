import { Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
import{ ItemAnim } from '../../anims/item.amim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    ItemAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  @Output() editTask:EventEmitter<any> = new EventEmitter();;
  avatar = '';
  widthPriority = 'in';

  constructor() { }

  ngOnInit() {
    this.avatar = this.task.owner ? this.task.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.widthPriority = 'in';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.widthPriority = 'out';
  }
 

  onEditClick(){
    this.editTask.emit(this.task);
  }

  onCheckboxClick(ev:Event){
    ev.stopPropagation();
  }

}
