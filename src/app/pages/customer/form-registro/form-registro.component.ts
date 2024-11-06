import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ChildrenOutletContexts, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../../core/services/payment.service';
import { Payment } from '../../../shared/models/payment.model';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [NavbarCustomerComponent, CommonModule, FooterComponent, RouterLink,FormsModule],
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  nuevoPago: Payment = {
    id: 0,
    CardNumber: 0,
    date: new Date(),
    CVV: 0,
    FullName: ''
  };

  constructor(private paymentService: PaymentService) {}

  guardarPago(): void {
    // Puedes generar un id único basado en el tamaño actual de la lista
    this.nuevoPago.id = this.paymentService.obtenerPagos().length + 1;
    this.paymentService.agregarPago(this.nuevoPago);
    console.log('Pago guardado:', this.paymentService.obtenerPagos());
    // Limpiar el formulario
    this.nuevoPago = { id: 0, CardNumber: 0, date: new Date(), CVV: 0, FullName: '' };
  }
}
