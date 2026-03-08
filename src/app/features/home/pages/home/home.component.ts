import { Component } from '@angular/core';
import { forwardStaggerTrigger } from '../../../../core/animations/animations';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
  forwardStaggerTrigger ],
})
export class HomeComponent {

}
