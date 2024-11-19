import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-config',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './navbar-config.component.html',
  styleUrl: './navbar-config.component.css'
})
export class NavbarConfigComponent {
  isMenuActive: boolean = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu(): void {
    this.isMenuActive = false;
  }
}
