import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../models/models';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() project!: Project; 
  @Input() selectedProjectIndex: number | null = null; 
  @Input() projects: Project[] = []; 

  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<number>(); 

  onClose() {
    this.close.emit();
  }

  goToNextProject() {
    if (this.selectedProjectIndex !== null) {
      const nextIndex = (this.selectedProjectIndex + 1) % this.projects.length;
      this.next.emit(nextIndex); 
    }
  }
}