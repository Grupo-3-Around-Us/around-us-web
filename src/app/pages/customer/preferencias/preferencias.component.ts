import { Component } from '@angular/core';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [NavbarMiCuentaComponent],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.css'
})
export class PreferenciasComponent {

}
