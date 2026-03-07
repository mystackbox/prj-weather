import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { environment } from '../../../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      metaTags: [
        {
          name: 'description',
          content:
            'Real-time weather forecast application developed using angular framework, leveraging device geolocation to provide accurate weather updates.',
        },
        {
          name: 'image',
          content:
            environment.baseUrl + 'public/seo-img/share-img.png',
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'article:author', content: 'Yingisani Chiqinda' },

        { property: 'og:site_name', content: "Geo Weather" },
        {
          property: 'og:title',
          content: 'Geo Weather - Angular Application',
        },
        {
          name: 'description',
          proprety: 'og:description',
          content: 'Real-time weather forecast application developed using angular framework, leveraging device geolocation to provide accurate weather updates.',
        },
        { property: 'og:type', content: 'Website' },

        {
          property: 'og:description',
          content: 'Real-time weather forecast application developed using angular framework, leveraging device geolocation to provide accurate weather updates.',
        },
                 {
          property: 'og:logo',
          content:
            environment.baseUrl + 'public/logo/1.png',
        },
        {
          property: 'og:image',
          content:
            environment.baseUrl + 'public/seo-img/share-img.png',
        },
        {
          property: 'og:image:secure_url',
          content:
            environment.baseUrl + 'public/seo-img/share-img.png',
        },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
          property: 'og:image:alt',
          content: 'Geo Weather - Angular Application',
        },
        { property: 'og:url', content: environment.baseUrl },


        { name: 'twitter:card', content: 'Summary' },
        {
          name: 'twitter:title',
          content: 'Geo Weather - Angular Application',
        },
        {
          name: 'twitter:description',
          content:
            'Real-time weather forecast application developed using angular framework, leveraging device geolocation to provide accurate weather updates.',
        },

        { name: 'twitter:url', content: environment.baseUrl },
        { name: 'twitter:site', content: '@yingi' },
        { name: 'twitter:creator', content: '@yingi' },
        {
          name: 'twitter:image',
          content:
            environment.baseUrl + 'public/seo-img/share-img.png',
        },
        {
          name: 'twitter:image:src',
          content:
            environment.baseUrl + 'public/seo-img/share-img.png',
        },
        {
          name: 'twitter:image:alt',
          content: 'Geo Weather - Angular Application',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
