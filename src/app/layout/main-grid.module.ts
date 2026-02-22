import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGridComponent } from './main-grid/main-grid.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PinnedWeatherComponent } from './pinned-weather/pinned-weather.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    MainGridComponent,
    HeaderComponent,
    FooterComponent,
    PinnedWeatherComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, //for router-outlet tag
  ],
  exports: [MainGridComponent],
})
export class MainGridModule {}
