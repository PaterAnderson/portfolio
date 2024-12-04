import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  images = [
    { src: '/assets/img/ico/html.svg', word: 'HTML' },
    { src: '/assets/img/ico/css.svg', word: 'CSS' },
    { src: '/assets/img/ico/js.svg', word: 'JavaScript' },
    { src: '/assets/img/ico/material.svg', word: 'Material Design' },
    { src: '/assets/img/ico/ts.svg', word: 'TypeScript' },
    { src: '/assets/img/ico/angular.svg', word: 'Angular' },
    { src: '/assets/img/ico/firebase.svg', word: 'Firebase' },
    { src: '/assets/img/ico/git2.svg', word: 'GIT' },
    { src: '/assets/img/ico/api.svg', word: 'Rest-Api' },
    { src: '/assets/img/ico/scrum.svg', word: 'Scrum' },
    { src: '/assets/img/ico/growth.svg', word: 'Growth mindset' },
  ];}
