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
      imageUrl: '/assets/img/projects/join2.png',
      previewImageUrl: '/assets/img/projects/join.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'Firebase', icon: '/assets/img/deco/firebase.svg' },
        { name: 'Angular', icon: '/assets/img/deco/angular.svg' },
        { name: 'TypeScript', icon: '/assets/img/deco/ts.svg' }
      ],
      link: 'https://join.tom-wahrenberg.com',
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
      link: 'https://sharkie.tom-wahrenberg.com',
      gitLink: 'https://github.com/PaterAnderson/Sharkie'
    },
    {
      title: 'DABubble',
      description: $localize`:@@Project three description: This application is a single-page messenger designed for seamless communication between users. It allows individuals to send and receive messages instantly, fostering effortless conversation and connection.`,
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: '/assets/img/projects/dabubble.png',
      previewImageUrl: '/assets/img/projects/dabubble_pre.png',
      technologiesWithIcons: [
        { name: 'HTML', icon: '/assets/img/deco/html.svg' },
        { name: 'CSS', icon: '/assets/img/deco/css.svg' },
        { name: 'Firebase', icon: '/assets/img/deco/firebase.svg' },
        { name: 'Angular', icon: '/assets/img/deco/angular.svg' },
        { name: 'TypeScript', icon: '/assets/img/deco/ts.svg' }
      ],
      link: 'https://dabubble.tom-wahrenberg.com',
      gitLink: 'https://github.com/PaterAnderson/dabubble'
    }
  ];

  showImage: string = '';
  showOverlay: boolean = false;
  selectedProject: Project | null = null;
  selectedProjectIndex: number | null = null;

  /**
   * Opens the info card for a specific project.
   * 
   * @param {Project} project - The project for which the info card is opened.
   * @param {number} index - The index of the project in the projects list.
   */
  openInfoCard(project: Project, index: number) {
    this.selectedProject = project;
    this.selectedProjectIndex = index;
    this.showOverlay = true;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the info card and restores the state of the user interface.
   */
  closeInfoCard() {
    this.showOverlay = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  /**
   * Updates the currently selected project based on the provided index.
   * 
   * @param {number} index - The index of the new project in the projects list,
   * which will be set as the selected project.
   */
  updateSelectedProject(index: number) {
    this.selectedProjectIndex = index;
    this.selectedProject = this.projects[index];
  }
}