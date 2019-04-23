import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {
  @Output() onQuickCreateTask: EventEmitter<string> = new EventEmitter()
  desc:string = '';
  constructor() { }

  ngOnInit() {
  }
  @HostListener('keyup.enter')
  quickCreateTask(){
    if(!this.desc || this.desc.length === 0 || !this.desc.trim()){
      return;
    }
    this.onQuickCreateTask.emit(this.desc);
    this.desc = '';
  }

}
