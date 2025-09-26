import {Component, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Project} from '../../data/project.model';

@Component({
  standalone: true,
  selector: 'app-project-bubble',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-bubble.html',
  styleUrls: ['./project-bubble.scss']
})
export class ProjectBubbleComponent {
  @Input({ required: true }) project!: Project;

  loaded = false;

  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    this.r.setStyle(this.el.nativeElement, 'transform', `rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale(1.02)`);
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'transform', 'rotateX(0) rotateY(0) scale(1)');
  }
}
