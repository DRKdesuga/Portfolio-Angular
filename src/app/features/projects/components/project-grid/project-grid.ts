import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { ProjectBubbleComponent } from '../project-bubble/project-bubble';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';
import { StaggerDirective } from '../../../../shared/directives/stagger.directive';

@Component({
  standalone: true,
  selector: 'app-project-grid',
  imports: [CommonModule, ProjectBubbleComponent, RevealOnScrollDirective, StaggerDirective],
  templateUrl: './project-grid.html',
  styleUrls: ['./project-grid.scss']
})
export class ProjectGridComponent {
  private readonly svc = inject(ProjectsService);
  private readonly router = inject(Router);

  projects = this.svc.projects;


  open(slug: string) {
    void this.router.navigate(['/', slug]);
  }
}
