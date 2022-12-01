import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Services/project.service';
import { Project } from './Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  getprojects(): void {
    this.projectsService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
  /**
   *
   */
  constructor(private projectsService: ProjectService) {}

  ngOnInit(): void {
    this.getprojects();
  }
}
