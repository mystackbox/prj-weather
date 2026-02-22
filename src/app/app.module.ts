import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGridModule } from './layout/main-grid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
// import { SharedModule } from './shared/shared.module';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    // SharedModule,
    MainGridModule, //master_page grid module
    AppRoutingModule, //angular main routing module
    BrowserAnimationsModule,
    // ShareButtonsModule,
    // ShareIconsModule
],
  providers: [
    //for BrowserAnimationsModule
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
