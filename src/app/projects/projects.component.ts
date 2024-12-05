import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoCardComponent } from "./info-card/info-card.component";
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'] 
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['Angular', 'TypeScript'],
      imageUrl: '/assets/img/projects/join_b.png',
      technologiesWithIcons: [
        { name: 'Angular', icon: '/assets/img/deco/angular.svg' },
        { name: 'TypeScript', icon: '/assets/img/deco/ts.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'Firebase', icon: '/assets/img/deco/firebase.svg' }
      ]
    },
    {
      title: 'Sharkie',
      description: 'A fun little game to keep you engaged.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/assets/img/projects/join_b.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'JavaScript', icon: '/assets/img/deco/js.svg' }
      ]
    },
    {
      title: 'Pokedex',
      description: 'A Pokédex application that allows you to view Pokémon information.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/assets/img/projects/join_b.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'JavaScript', icon: '/assets/img/deco/js.svg' }
      ]
    }
  ];

  showImage: string = ''; 
  showOverlay: boolean = false;
  selectedProject: Project | null = null;
  selectedProjectIndex: number | null = null; 
  
  openInfoCard(project: Project, index: number) {
    this.selectedProject = project;
    this.selectedProjectIndex = index;
    this.showOverlay = true;
    document.body.style.overflow = 'hidden'; 
}

closeInfoCard() {
    this.showOverlay = false;
    this.selectedProject = null;
    document.body.style.overflow = ''; 
}

  updateSelectedProject(index: number) {
    this.selectedProjectIndex = index;
    this.selectedProject = this.projects[index];
  }
}