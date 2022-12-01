import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../projects/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  ngOnInit(): void {}

  @Input() project!: Project;
}
