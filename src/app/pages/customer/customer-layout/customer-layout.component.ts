import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { EventSearchComponent } from '../event-search/event-search.component';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarMiCuentaComponent, NavbarCustomerComponent, CommonModule, FooterComponent, EventSearchComponent],
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent {
  isConfigRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.checkIfConfigRoute();
    });
  }

  private checkIfConfigRoute() {
    const currentRoute = this.router.url;
    this.isConfigRoute = currentRoute.startsWith('/config');
  }
}
