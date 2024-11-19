import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-mi-cuenta',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './navbar-mi-cuenta.component.html',
  styleUrl: './navbar-mi-cuenta.component.css'
})
export class NavbarMiCuentaComponent {
  user: any;
  isMenuActive: boolean = false;

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUserInfo();
  }


  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu(): void {
    this.isMenuActive = false;
  }
}
