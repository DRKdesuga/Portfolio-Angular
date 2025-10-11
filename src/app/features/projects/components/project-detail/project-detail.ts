import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from '../../projects.service';

@Component({
  standalone: true,
  selector: 'app-project-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.scss']
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  private svc = inject(ProjectsService);
  private location = inject(Location);
  private router = inject(Router);

  @ViewChild('player') player?: ElementRef<HTMLVideoElement>;

  project = this.svc.getBySlug(this.route.snapshot.paramMap.get('slug')!);

  demoOpen = false;
  demoPulse = false;

  get highlights(): string[] {
    if (!this.project?.description) return [];
    return this.project.description
      .split(/(?<=\.)\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 0 && s.length < 240)
      .slice(0, 5);
  }

  goBack() {
    if (history.length > 1) this.location.back();
    else void this.router.navigate(['/']);
  }

  openDemo(ev: Event) {
    ev.stopPropagation();
    this.demoPulse = true;
    setTimeout(() => {
      this.demoPulse = false;
      this.demoOpen = true;
      setTimeout(() => this.player?.nativeElement.play().catch(() => {}), 0);
    }, 160);
    document.addEventListener('keydown', this.onEsc, { once: false });
  }

  closeDemo() {
    this.player?.nativeElement.pause();
    this.demoOpen = false;
    document.removeEventListener('keydown', this.onEsc as any);
  }

  private onEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.demoOpen) this.closeDemo();
  };
}
