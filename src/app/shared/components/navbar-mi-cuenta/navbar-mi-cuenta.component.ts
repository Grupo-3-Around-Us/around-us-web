import { Component } from '@angular/core';
import { UserService } from '../../../core/user.service';
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
  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUserInfo();
  }
}
