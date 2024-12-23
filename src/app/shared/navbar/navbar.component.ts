import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  currentLanguage: string = 'en';
  currentPath: string = '';
  currentHash: string = '';

  constructor() {}

  /**
   * Initializes the component and updates the current language, path, and hash.
   * This function is called when the component is initialized.
   */
  ngOnInit() {
    this.updateLanguageAndPath();
  }

  /**
   * Extracts the current language, path, and hash from the URL.
   * It splits the URL path to determine the language and stores the hash if available.
   */
  private updateLanguageAndPath(): void {
    const pathArray = window.location.pathname.split('/').filter(Boolean);
    if (pathArray.length > 0) {
      this.currentLanguage = pathArray[0];
    }
    this.currentPath = pathArray.slice(1).join('/');
    this.currentHash = window.location.hash;
  }

  /**
   * Toggles the language between English and German.
   * It also preserves the current path and hash and navigates to the new URL with the updated language.
   */
  toggleLanguage(): void {
    this.currentHash = window.location.hash;
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    if (!this.currentPath) {
      this.currentPath = '/';
    }
    let newUrl = `/${newLanguage}${this.currentPath ? '/' + this.currentPath : ''}`;
    if (this.currentHash) {
      newUrl += this.currentHash;
    }
    console.log(`Navigating to: ${newUrl}`);
    window.location.href = newUrl;
  }

  /**
   * Toggles the visibility of the menu by switching the value of `isMenuOpen`.
   * This function is typically used for mobile or interactive navigation menus.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
