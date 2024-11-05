import { Component } from '@angular/core';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [NavbarMiCuentaComponent, CommonModule],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.css'
})
export class PreferenciasComponent {
  isEventModalOpen = false;
  isNotifModalOpen = false;

  openModal(type: string) {
    if(type === 'event'){
      this.isEventModalOpen = true;
    }
    else if(type === 'notif'){
      this.isNotifModalOpen = true;
    }
  }

  closeModal() {
    this.isEventModalOpen = false;
    this.isNotifModalOpen = false;
  }

  todosIntereses: string[] = ['Machine Learning', 'Deep Learning', "Herramientas de IA"]
}
