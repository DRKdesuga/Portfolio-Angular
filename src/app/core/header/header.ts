import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  offsetY = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    this.offsetY = (window.scrollY || 0) * 0.2;
  }
}
