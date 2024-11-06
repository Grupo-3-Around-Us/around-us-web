import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EventService } from '../../../core/services/event.service';
import { Router } from '@angular/router';
import { Event as CustomEvent } from '../../../shared/models/event.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-event-search',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatInputModule, MatFormFieldModule, MatButtonModule, CommonModule],
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent {
  @Input() searchQuery: string = '';
  events: CustomEvent[] = [];
  filteredEvents: CustomEvent[] = [];
  displayedColumns: string[] = ['name', 'category', 'price', 'programation', 'eventdescription', 'actions'];

  selectedCategory: string = 'Hackathones';  // Filtro de categoría por defecto
  selectedPrice: number = 0;  // Filtro de precio por defecto (0 para gratis)
  minPrice: number = 0;  // Precio mínimo
  maxPrice: number = 120;  // Precio máximo
  categories: string[] = ['Eventos', 'Hackathones'];  // Opciones de categoría

  private eventSearchService = inject(EventService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadEvents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
       this.filterEvents();  // Llamar a filterEvents cuando el término de búsqueda cambie
    }
 }

  loadEvents(): void {
    this.events = this.eventSearchService.getEvents();
    this.filteredEvents = [...this.events];  // Inicializar los eventos filtrados
  }

  filterEvents(): void {
    const query = this.searchQuery.toLowerCase();

    this.filteredEvents = this.events.filter(event => {
        const matchesCategory = event.category.name === this.selectedCategory; // Comparación correcta
        const matchesPrice = this.selectedPrice === 0 ? event.price === 0 : event.price >= this.minPrice && event.price <= this.maxPrice;
        const matchesSearch = event.name.toLowerCase().includes(query) || event.price.toString().includes(query);

        return matchesCategory && matchesPrice && matchesSearch;
    });
}
  viewEventDetails(eventId: number): void {
    this.router.navigate([`/customer/events/${eventId}`]); // Ruta para detalles del evento
  }
}
