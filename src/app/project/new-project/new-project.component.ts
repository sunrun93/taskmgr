import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA)private data,
    private dialogRef:MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    console.log(this.data);
    let darkMode = this.data.darkMode;
  }

  onClosed(){
    this.dialogRef.close('i have been closed');
  }

  deleteProject(){

  }


}
