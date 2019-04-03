import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { loadSVGResource } from '../utils/svg.util';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent, FooterComponent, SideBarComponent],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SideBarComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule

  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
    ){
    if(parent){
      console.log('CoreModule 已经存在，不再加载。')
    }
    loadSVGResource(ir, ds);
  }
}
