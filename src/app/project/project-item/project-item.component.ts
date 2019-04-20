import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { CardAnim } from '../../anims/card.anim';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[CardAnim]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite: EventEmitter<any> = new EventEmitter();
  @HostBinding('@card')cardState = 'out';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.cardState = 'out';
  }
 
  inviteMember(){
    this.onInvite.emit();
  }

}
