import { Component, inject } from '@angular/core';
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

  project = this.svc.getBySlug(this.route.snapshot.paramMap.get('slug')!);

  /** Build small “highlights” from the long description (first 4–6 sentences). */
  get highlights(): string[] {
    if (!this.project?.description) return [];
    return this.project.description
      .split(/(?<=\.)\s+/)           // split on sentence end
      .map(s => s.trim())
      .filter(s => s.length > 0 && s.length < 240)
      .slice(0, 5);
  }

  goBack() {
    if (history.length > 1) this.location.back();
    else void this.router.navigate(['/']);
  }
}
