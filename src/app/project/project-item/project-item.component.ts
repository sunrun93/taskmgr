import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CardAnim } from '../../anims/card.anim';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[CardAnim],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @HostBinding('@card')cardState = 'out';
  constructor(private dialog: MatDialog) { }

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

  onDeleteProject(){
   let dialog = this.dialog.open(ConfirmDialogComponent, {data:{'title': '确认删除','content':'您是否确认删除该列表？'}});
   dialog.afterClosed().subscribe(res=>{
     this.onDelete.emit(this.item);
   })
  }

}
