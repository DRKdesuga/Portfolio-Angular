import { Routes } from '@angular/router';
import { ProjectGridComponent } from './features/projects/components/project-grid/project-grid';
import { ProjectDetailComponent } from './features/projects/components/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: ProjectGridComponent, title: 'Portfolio' },
  { path: ':slug', component: ProjectDetailComponent, title: 'Project' },
  { path: '**', redirectTo: '' }
];
