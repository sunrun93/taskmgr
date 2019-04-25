import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss']
})
export class ImageListSelectComponent implements OnInit {
  @Input() title = '选择';
  @Input() rowHeight = '64px';
  @Input() cols = 6;
  @Input() items: any[] = [];
  @Input() useSvgIcon = false;
  @Input() imageWidth = '80px';

  selected: string;

  constructor() { }

  ngOnInit() {
  }

  change(i){
    this.selected = this.items[i];
  }

}
