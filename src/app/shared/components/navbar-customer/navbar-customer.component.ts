import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent {
  showNotificationMenu = false;

  toggleNotificationMenu() {
    this.showNotificationMenu = !this.showNotificationMenu;
  }
}
