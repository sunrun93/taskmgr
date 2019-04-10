import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA)private data,
    private dialogRef:MatDialogRef<NewProjectComponent>,
    private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    console.log(this.data);
    let darkMode = this.data.darkMode;
    if(darkMode){
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    }
  }

  onClosed(){
    this.dialogRef.close('i have been closed');
  }


}
