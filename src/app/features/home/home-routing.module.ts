import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      data: {
            title: 'Home',
            metaTags: [
               { name: 'description', content: 'Yingisani Angular Personal Portfolio' },
              { name: 'short-desc', content: 'a brief about my skills and expertise' }
            ]
          }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
