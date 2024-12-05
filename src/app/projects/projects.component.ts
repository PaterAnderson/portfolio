import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  technologies: string[];
  imageUrl: string; 
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
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: '/assets/img/projects/join.png'
    },
    {
      title: 'Sharkie',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/assets/img/projects/sharkie.png' 
    },
    {
      title: 'Pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/assets/img/projects/pokedex.png'  
    }
  ];

  showImage: string = ''; 
}
