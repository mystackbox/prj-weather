import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-up-btn',
  standalone: false,
  templateUrl: './scroll-up-btn.component.html',
  styleUrl: './scroll-up-btn.component.scss',
})
export class ScrollUpBtnComponent {
  displayButton = false;

  //listen to browser events: scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.displayButton = window.scrollY > 20;
  }

  //scroll-up smoothly
  scrollToTop() {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  }
}
