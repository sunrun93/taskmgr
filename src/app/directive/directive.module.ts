import { NgModule } from '@angular/core';
import { DragDirective } from './dragable.directive';

@NgModule({
 
  declarations: [DragDirective],
  exports:[DragDirective]
})
export class DirectiveModule { }
