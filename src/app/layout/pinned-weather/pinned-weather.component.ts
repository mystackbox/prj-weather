import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  fadeInTrigger,
  slideInFromBottomTrigger,
  slideInFromTopTrigger,
  staggerInFromRightTrigger,
} from '../../core/animations/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { TitleMetadataService } from '../../core/services/service-title-metadata/title-metadata.service';

@Component({
  selector: 'app-pinned-weather',
  standalone: false,
  templateUrl: './pinned-weather.component.html',
  styleUrl: './pinned-weather.component.scss',
  animations: [
    fadeInTrigger,
    staggerInFromRightTrigger,
    slideInFromBottomTrigger,
    slideInFromTopTrigger,
  ],
})
export class PinnedWeatherComponent implements OnInit {
  hasChanges?: boolean = false;
  pageTitle: string | undefined;

  // animate whenever a content change change is deteced
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _metaService: TitleMetadataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //initiate the navigation change detection
    this.setPageTitleFromRoute();
  }

  //implement pageTitle
  setPageTitleFromRoute() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          console.log('We were here..');
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        //detect route changes
        this.hasChanges = false;

        this.cdr.markForCheck();
        this.cdr.detectChanges();
        this.pageTitle = data['title'];

        if (this.pageTitle) {
          console.log('We moved here..' + data['title']);

          //retrieve data from the activated route
          let _title = data['title'];
          let _metaData = data['metaTags'];

          //detect route data changes
          this.hasChanges = true;

          //upate the meta tag using data from the component activated route
          this._metaService.updateTitle(_title);
          this._metaService.updateMetaTags(_metaData);
        }

        console.log(this.hasChanges);
      });
  }

  redirectToProjects() {
    this._router.navigate(['/home']);
  }
}
