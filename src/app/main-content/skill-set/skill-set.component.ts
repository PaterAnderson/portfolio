import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent {
  images = [
    { src: '/assets/img/ico/html.svg', word: 'HTML' },
    { src: '/assets/img/ico/css.svg', word: 'CSS' },
    { src: '/assets/img/ico/js.svg', word: 'JavaScript' },
    { src: '/assets/img/ico/material.svg', word: 'Material Design' },
    { src: '/assets/img/ico/ts.svg', word: 'TypeScript' },
    { src: '/assets/img/ico/angular.svg', word: $localize`:@@angular:Angular` },
    { src: '/assets/img/ico/firebase.svg', word: 'Firebase' },
    { src: '/assets/img/ico/git2.svg', word: 'GIT' },
    { src: '/assets/img/ico/api.svg', word: 'Rest-Api' },
    { src: '/assets/img/ico/scrum.svg', word: 'Scrum' },
    { src: '/assets/img/ico/growth.svg', word: 'Growth mindset' },
  ];

  interests = [
    { src: '/assets/img/ico/interests/react.svg', word: 'React' },
    { src: '/assets/img/ico/interests/vue.svg', word: 'Vue Js' }, 
  ];
  
  isInfoVisible = false;
  currentHoverIndex: number | null = null;

  showInfo(index: number) {
    if (index === this.images.length - 1) {
      this.isInfoVisible = true;
    } else {
      this.isInfoVisible = false;
    }
  }
  
  hideInfo() {
    this.isInfoVisible = false; 
  }
}