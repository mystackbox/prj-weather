import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TitleMetadataService } from './services/service-title-metadata/title-metadata.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    provideHttpClient(withFetch()),
  ]
})
export class CoreModule { }
