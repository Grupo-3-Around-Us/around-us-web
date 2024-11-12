import { Event } from './../../../shared/models/event.model';
import { EventService } from './../../../core/services/event.service';
import { Component } from '@angular/core';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ActivatedRoute, ChildrenOutletContexts, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [NavbarCustomerComponent, CommonModule, FooterComponent, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  event: Event | null = {} as Event;
  formRegisEvent: FormGroup;
  currUser: User | null;
  formPayment: FormGroup;

  constructor(private route: ActivatedRoute, private eventService: EventService, private fb: FormBuilder, authService: AuthService) {
    this.formRegisEvent = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    })
    this.formPayment = this.fb.group({
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaCaducidad: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      ccv: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      nombreCompleto: ['', [Validators.required]],
    })
    this.currUser = authService.getCurrentUser();
  }

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getEventById(eventId);
  }

  onSubmit(): void {
    if (this.formRegisEvent.valid) {
      if (this.event) {
        this.currUser?.registeredEvents?.push(this.event);
      }
    }
  }
}
