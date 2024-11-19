import { routes } from './../../../app.routes';
import { Event } from './../../../shared/models/event.model';
import { EventService } from './../../../core/services/event.service';
import { Component, inject } from '@angular/core';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ActivatedRoute, ChildrenOutletContexts, Router, RouterLink } from '@angular/router';
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
  formRegistro: FormGroup;
  currUser: User | null;
  router = inject (Router);

  constructor(private route: ActivatedRoute, private eventService: EventService, private fb: FormBuilder, authService: AuthService) {
    this.formRegistro = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],

    numeroTarjeta: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(18)]],
    fechaCaducidad: ['', [Validators.required]],
    cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    nombreCompleto: ['', [Validators.required]],
    });

    this.currUser = authService.getCurrentUser();
  }

  isButtonDisabled(): boolean {
    if (this.event?.price === 0) {
      //para el evento gratuito se validan solo los campos de registro
      return ! (
        this.formRegistro.get('nombre')?.valid &&
        this.formRegistro.get('apellidos')?.valid &&
        this.formRegistro.get('email')?.valid &&
        this.formRegistro.get('telefono')?.valid
      );
    }
    else {
      //para el de pago se evaluan toditos
      return this.formRegistro.invalid;
    }
  }

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getEventById(eventId);

    if (this.event?.price === 0) {
      //se deshabilitan los campos de pago para eventos gratuitos
      this.formRegistro.get('numeroTarjeta')?.disable();
      this.formRegistro.get('fechaCaducidad')?.disable();
      this.formRegistro.get('cvv')?.disable();
      this.formRegistro.get('nombreCompleto')?.disable();
    }

    else {
      //aqui se habilitan los campos de pago para eventos de pago
      this.formRegistro.get('numeroTarjeta')?.enable();
      this.formRegistro.get('fechaCaducidad')?.enable();
      this.formRegistro.get('cvv')?.enable();
      this.formRegistro.get('nombreCompleto')?.enable();
    }
  }


  onSubmit(): void {
    if (this.formRegistro.valid) {
      if (this.event) {
        this.currUser?.registeredEvents.push(this.event);
        this.router.navigate(['customer/home']);
      }
    }
  }
}
