import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { AuthService } from '../../../core/services/auth.service';
import { Event } from '../../../shared/models/event.model';
import { RegisterService } from '../../../core/services/registered-events.service';

@Component({
  selector: 'app-event-registrado',
  standalone: true,
  imports: [NavbarCustomerComponent, CommonModule, FormsModule],
  templateUrl: './event-registrado.component.html',
  styleUrls: ['./event-registrado.component.css']
})
export class EventRegistradoComponent implements OnInit {
  isRegisteredEvents = false;
  eventsRegistrados: Event[] = []; // Array para almacenar los eventos registrados

  constructor(private authService: AuthService, private registerService: RegisterService) {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.registeredEvents) {
      this.eventsRegistrados = currentUser.registeredEvents; // Cargar eventos registrados del usuario
    }
  }

  ngOnInit() {
    this.registerService.openModal$.subscribe(() => {
      this.openModal();
    });
  }

  openModal() {
    this.isRegisteredEvents = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isRegisteredEvents = false;
    document.body.classList.remove('modal-open');
  }
}
