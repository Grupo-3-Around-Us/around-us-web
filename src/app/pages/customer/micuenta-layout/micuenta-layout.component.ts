import { Component } from '@angular/core';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';

@Component({
  selector: 'app-micuenta-layout',
  standalone: true,
  imports: [NavbarCustomerComponent, FooterComponent, RouterOutlet,NavbarMiCuentaComponent],
  templateUrl: './micuenta-layout.component.html',
  styleUrl: './micuenta-layout.component.css'
})
export class MicuentaLayoutComponent {

}
