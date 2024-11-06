import { Component } from '@angular/core';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarConfigComponent } from '../../../shared/components/navbar-config/navbar-config.component';

@Component({
  selector: 'app-config-layout',
  standalone: true,
  imports: [NavbarCustomerComponent, FooterComponent, RouterOutlet, NavbarConfigComponent],
  templateUrl: './config-layout.component.html',
  styleUrl: './config-layout.component.css'
})
export class ConfigLayoutComponent {

}
