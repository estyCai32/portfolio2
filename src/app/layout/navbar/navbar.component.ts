import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {}

  classApplied = false;
  toggleClass() {
      this.classApplied = !this.classApplied;
  }

  // Navbar Sticky
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPosition >= 50) {
          this.isSticky = true;
      } else {
          this.isSticky = false;
      }
  }

}
