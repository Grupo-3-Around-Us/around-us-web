import { Injectable } from '@angular/core';
import { Payment } from './../../shared/models/payment.model';


@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private payments: Payment[] = [
    {
      id: 1,
      CardNumber: 1234567890123456,
      date: new Date('2024-01-01'),
      CVV: 123,
      FullName: 'John Doe'
    },
  ];

  constructor() {}

  // Método para obtener la lista de pagos
  obtenerPagos(): Payment[] {
    return this.payments;
  }

  // Método para agregar un nuevo pago
  agregarPago(payment: Payment): void {
    this.payments.push(payment);
  }

  // Método para actualizar un pago existente (usando id)
  actualizarPago(id: number, updatedPayment: Payment): void {
    const index = this.payments.findIndex(p => p.id === id);
    if (index !== -1) {
      this.payments[index] = updatedPayment;
    }
  }
}
