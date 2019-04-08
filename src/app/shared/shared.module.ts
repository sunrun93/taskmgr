import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { 
  MatIconModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatCardModule, 
  MatInputModule, 
  MatListModule,
  MatSlideToggleModule
 } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule
  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
