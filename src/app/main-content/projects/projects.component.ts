import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoCardComponent } from "./info-card/info-card.component";
import { Project } from '../../models/models';

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
      description: $localize`:@@Project one description:Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.`,
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: '/assets/img/projects/join_b.png',
      previewImageUrl: '/assets/img/projects/join.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'Firebase', icon: '/assets/img/deco/firebase.svg' },
        { name: 'Angular', icon: '/assets/img/deco/angular.svg' },
        { name: 'TypeScript', icon: '/assets/img/deco/ts.svg' },
      ],
      link: 'https://www.portfoliotw.com/join',
      gitLink: 'https://github.com/Lukas1979/Join-Projekt'
    },
    {
      title: 'Sharkie',
      description: $localize`:@@Project two description:Can you collect enough treasure and potions to transform your shark into a fierce warrior capable of taking on the orca?`,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/assets/img/projects/sharkie_b.png',
      previewImageUrl: '/assets/img/projects/sharkie.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'JavaScript', icon: '/assets/img/deco/js.svg' }
      ],
      link: 'https://www.portfoliotw.com/sharkie',
      gitLink: 'https://github.com/PaterAnderson/Sharkie'
    },
    {
      title: 'Pokédex',
      description: $localize`:@@Project three description: A Pokédex application that allows you to view detailed Pokémon information, utilizing data sourced from the comprehensive PokéAPI for accurate and up-to-date stats, abilities, and more.`,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/assets/img/projects/pokedex_b.png',
      previewImageUrl: '/assets/img/projects/pokedex.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'JavaScript', icon: '/assets/img/deco/js.svg' }
      ],
      link: 'https://www.portfoliotw.com/pokedex',
      gitLink: 'https://github.com/PaterAnderson/Join'
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