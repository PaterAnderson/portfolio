import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  /**
   * Toggles the visibility of the menu by switching the value of `isMenuOpen`.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
