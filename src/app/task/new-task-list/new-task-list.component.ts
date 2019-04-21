import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskListComponent implements OnInit {
  title:string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)private data,
    private dialog: MatDialogRef<NewTaskListComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onClosed(){
    this.dialog.close();
  }
}
