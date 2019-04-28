import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>{ImageListSelectComponent}),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>{ImageListSelectComponent}),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements OnInit {
  @Input() title = '选择';
  @Input() rowHeight = '64px';
  @Input() cols = 6;
  @Input() items: any[] = [];
  @Input() useSvgIcon = false;
  @Input() imageWidth = '80px';

  selected: string;
  private propagateChange = (_: any) => {}
  constructor() { }

  ngOnInit() {
  }

  change(i){
    this.selected = this.items[i];
    this.propagateChange(this.selected);
  }

  writeValue(obj:any):void{
    this.selected = obj;
  }

  registerOnChange(fn:any):void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn:any):void{}

  validate(c: FormControl): { [key: string]: any } {
    return this.selected ? null : {
      imsgeListInvalid: {
        valid: false
      }
    }
  }

}
