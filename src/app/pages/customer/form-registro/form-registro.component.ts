import { Component } from '@angular/core';
import { NavbarCustomerComponent } from '../../../shared/components/navbar-customer/navbar-customer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ChildrenOutletContexts, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [NavbarCustomerComponent, CommonModule, FooterComponent, RouterLink],
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

}
