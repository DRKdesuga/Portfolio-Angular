import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[stagger]',
  standalone: true
})
export class StaggerDirective implements OnInit {
  @Input('stagger') index = 0;
  constructor(private el: ElementRef, private r: Renderer2) {}
  ngOnInit() {
    this.r.setStyle(this.el.nativeElement, 'opacity', '0');
    this.r.setStyle(this.el.nativeElement, 'transform', 'translateY(12px)');
    this.r.setStyle(this.el.nativeElement, 'animation', 'fadeUp .6s ease both');
    this.r.setStyle(this.el.nativeElement, 'animation-delay', `${this.index * 90}ms`);
  }
}
