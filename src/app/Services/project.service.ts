import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, projects } from '../projects/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects(): Observable<Project[]> {
    const _projects = of(projects);
    return _projects;
  }

  getProject(id: number): Observable<Project> {
    const project = projects.find((p) => p.id === id)!;
    return of(project);
  }
}
