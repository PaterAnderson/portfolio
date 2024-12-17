import { Component } from '@angular/core';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ CommonModule, LandingPageComponent ,AboutMeComponent, SkillSetComponent, ProjectsComponent, CommentsComponent, ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
