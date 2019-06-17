import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { loadSVGResource } from '../utils/svg.util';
import { SharedModule} from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SideBarComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SideBarComponent,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        url: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
    ){
    if(parent){
      console.log('Core Module 已经存在，不再加载。')
    }
    loadSVGResource(ir, ds);
  }
}
