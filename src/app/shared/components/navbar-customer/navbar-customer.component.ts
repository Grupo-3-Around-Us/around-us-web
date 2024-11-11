import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent {
  showProfileOptions = false;
  searchQuery: string = '';

  constructor(private searchService: SearchService) {}

  toggleNotificationMenu() {
    this.showProfileOptions = !this.showProfileOptions;
  }

  onSearchQueryChange(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.searchService.setSearchQuery(query);
  }
}
