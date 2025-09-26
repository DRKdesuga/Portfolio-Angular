import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { ParticleBackground } from './core/background/particle-background/particle-background';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, ParticleBackground, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  blurLevel = 12; // valeur de base

  @HostListener('window:scroll', [])
  onScroll() {
    const y = window.scrollY || 0;
    // varie entre 12px (haut de page) et max ~32px
    this.blurLevel = 12 + Math.min(20, y * 0.02);
  }
}
