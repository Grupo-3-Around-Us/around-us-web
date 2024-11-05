import { Component } from '@angular/core';
import { InfoPersonalComponent } from '../info-personal/info-personal.component';
import { RouterOutlet } from '@angular/router';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarMiCuentaComponent, NavbarCustomerComponent, CommonModule, FooterComponent],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
