import{ Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';
import { DragDropService } from './drag-drop.service';
import {take} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Directive({
    selector:'[app-droppable]'
})

export class DropDirective {

@Input() dragEnterClass: string;
private data$:Observable<any>;

constructor( 
    private el: ElementRef, 
    private rd: Renderer2, 
    private service: DragDropService){ 
        this.data$ = this.service.getDragData();
        // take.call(()=>{
        //     this.data$ = this.service.getDragData()
        // }, 1);
}
@HostListener('dragenter',['$event'])
onDragEnter(ev: Event){
    ev.stopPropagation();
    ev.preventDefault();
    if(this.el.nativeElement === ev.target){
        this.data$.subscribe(dragData=>{
            // if(this.dragTags.indexOf(dragData.tag)){

            // }
        })
    }
    
    this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
}

@HostListener('dragover',['$event'])
onDragOver(ev: Event){
    this.el.nativeElement === ev.target;
}

@HostListener('dragleave',['$event'])
onDragLeave(ev: Event){
    this.el.nativeElement === ev.target;
    this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
}

@HostListener('drop',['$event'])
onDrop(ev: Event){
    this.el.nativeElement === ev.target;
    this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
}
}