import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent {
  showNotificationMenu = false;

  toggleNotificationMenu() {
    this.showNotificationMenu = !this.showNotificationMenu;
  }
}
