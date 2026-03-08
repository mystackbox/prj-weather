import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MainGridModule } from './layout/main-grid.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    App,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    MainGridModule,

    BrowserAnimationsModule
  ],
  providers: [
   
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),


  ],
  bootstrap: [App]
})
export class AppModule { }
