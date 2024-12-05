import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      title: 'Sharkie',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];
}
