import { NgModule } from '@angular/core';
import { DragDirective } from './dragable.directive';
import { DropDirective } from './dropable.directive';
import { DragDropService } from './drag-drop.service';

@NgModule({
  declarations: [DragDirective, DropDirective],
  exports: [DragDirective, DropDirective],
  providers:[DragDropService]
})
export class DirectiveModule { }
