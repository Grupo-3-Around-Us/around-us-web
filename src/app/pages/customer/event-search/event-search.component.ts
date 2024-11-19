import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EventService } from '../../../core/services/event.service';
import { Router, RouterLink } from '@angular/router';
import { Event as CustomEvent } from '../../../shared/models/event.model';
import { CommonModule } from '@angular/common';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { SearchService } from '../../../core/services/search.service';
import { Subscription } from 'rxjs';
import { EventCardSearchComponent } from '../../../shared/components/event-card-search/event-card-search.component';

@Component({
  selector: 'app-event-search',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatInputModule, MatFormFieldModule, MatButtonModule, CommonModule, NavbarCustomerComponent, EventCardSearchComponent, RouterLink],
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  events: CustomEvent[] = [];
  filteredEvents: CustomEvent[] = [];

  isFiltersActive: boolean = false;

  selectedCategory: string = 'Todos';
  selectedPrice: number = 0;
  minPrice: number = 0;
  maxPrice: number = 120;
  categories: string[] = ["Todos", "IA Event", "Programming Event", "Networking Event", "Hackathon"];

  private eventSearchService = inject(EventService);
  private router = inject(Router);
  private searchService = inject(SearchService);
  private searchSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.loadEvents();
    // Suscribirse a los cambios en la consulta de búsqueda
    this.searchSubscription = this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      this.filterEvents();
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    this.searchSubscription?.unsubscribe();
  }

  loadEvents(): void {
    this.events = this.eventSearchService.getEvents();
    this.filteredEvents = [...this.events];
  }

  filterEvents(): void {
    const query = this.searchQuery.toLowerCase();
    if(query !== '' || this.selectedCategory !== 'Todos' ) {
      this.filteredEvents = this.events.filter(event => {
        if (this.selectedPrice === 0 && event.price === 0) {
          const matchesSearch = event.name.toLowerCase().includes(query) &&
          (this.selectedCategory === "Todos" ? true : event.category.name.toLowerCase() === this.selectedCategory.toLowerCase())
          return matchesSearch;
        }

        else if (this.selectedPrice !== 0 ) {
          const matchesSearch = event.name.toLowerCase().includes(query) &&
          (this.selectedCategory === "Todos" ? true : event.category.name.toLowerCase() === this.selectedCategory.toLowerCase())
          && event.price >= this.minPrice && event.price <= this.maxPrice;
          return matchesSearch;
        }

        else {
          const matchesSearch = event.name.toLowerCase().includes(query) &&
          (this.selectedCategory === "Todos" ? true : event.category.name.toLowerCase() === this.selectedCategory.toLowerCase());
          return matchesSearch;
        }
      });
    }
    else {
      this.filteredEvents = this.events.filter(event => {
        if(this.selectedPrice !== 0 ) {
          const matchesSearch = event.price >= this.minPrice && event.price <= this.maxPrice;
          return matchesSearch;
        }
        else {
          return event.price === 0;
        }
      });
    }
  }

  viewEventDetails(eventId: number): void {
    this.router.navigate([`/customer/events/${eventId}`]); // Ruta para detalles del evento
  }

  toggleFilters(): void {
    this.isFiltersActive = !this.isFiltersActive;
  }

  closeFilters(): void {
    if (this.isFiltersActive) {
      this.isFiltersActive = false;
    }
  }
}
