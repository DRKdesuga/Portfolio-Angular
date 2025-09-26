import { Injectable, signal, computed } from '@angular/core';
import { PROJECTS } from './data/projects.data';
import { Project } from './data/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>(PROJECTS);
  projects = computed(() => this._projects());
  getBySlug(slug: string) { return this._projects().find(p => p.slug === slug); }
}
