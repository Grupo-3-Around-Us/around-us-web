import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],  // Agrega FormsModule aquí
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent {
  showProfileOptions = false;
  searchQuery: string = '';

  @Output() searchQueryChanged = new EventEmitter<string>();

  toggleNotificationMenu() {
    this.showProfileOptions = !this.showProfileOptions;
  }

  onSearchQueryChange() {
    this.searchQueryChanged.emit(this.searchQuery);
  }
}
