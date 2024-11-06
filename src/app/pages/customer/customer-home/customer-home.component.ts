import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Importa RouterModule
import { Event } from '../../../shared/models/event.model'; // Usamos 'type' para la importación de la interfaz
import { EventService } from '../../../core/services/event.service';


@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [RouterModule, CommonModule], // Agrega RouterModule aquí
  templateUrl: './customer-home.component.html',
  styleUrls:['./customer-home.component.css']
})
export class CustomerHomeComponent {
  events: Event[] = [];

  constructor(private eventService: EventService, public router: Router) {}

  ngOnInit() {
    // Aquí debes cargar los eventos desde el servicio
    this.events = this.eventService.getEvents(); // Suponiendo que este método te devuelve los eventos
  }
  goToEventDetail(eventId: number): void {
    this.router.navigate(['event-details', eventId]);
  }
}
