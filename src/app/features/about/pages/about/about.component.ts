import { Component } from '@angular/core';
import { forwardStaggerTrigger } from '../../../../core/animations/animations';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
    animations: [
    forwardStaggerTrigger ]
})
export class AboutComponent {

}
