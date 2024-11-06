import { Component } from '@angular/core';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { CommonModule } from '@angular/common';
import { UserPreferences } from '../../../shared/models/user-preference.model';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service'; // Ajusta la ruta según tu proyecto
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [NavbarMiCuentaComponent, CommonModule, FormsModule],
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent {
  isEventModalOpen = false;
  isNotifModalOpen = false;

  intereses: string[] = ['Machine Learning', 'Deep Learning', 'Herramientas de IA', 'Aplicaciones de la IA', 'Hackatones'];
  tipoEvento: string[] = ['Competencias', 'Bootcamps', 'Conferencias', 'Talleres', 'Concurso de Programación'];
  lenguajedeProgramacion: string[] = ['Python', 'Java', 'JavaScript', 'C#', 'C++'];
  nivelExperiencia: string[] = ['Principiante', 'Intermedio', 'Avanzado'];
  objetivos: string[] = ['Networking', 'Competir', 'Desarrollar proyectos'];
  formatoEventos: string[] = ['Presencial', 'Virtual', 'Mixto'];

  preferenciasUsuario: string[] = [];

  constructor(private authService: AuthService) {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.userPreferences && currentUser.userPreferences.preference) {
      this.preferenciasUsuario = currentUser.userPreferences.preference;
    }
  }

  openModal(type: string) {
    if (type === 'event') {
      this.isEventModalOpen = true;
    } else if (type === 'notif') {
      this.isNotifModalOpen = true;
    }
  }

  closeModal(type: string) {
    this.isEventModalOpen = false;
    this.isNotifModalOpen = false;

    const currentUser = this.authService.getCurrentUser();
    if (currentUser && type === 'event') {
      currentUser.userPreferences.preference = this.preferenciasUsuario;
    }
  }

  togglePreferencia(valor: string) {
    const index = this.preferenciasUsuario.indexOf(valor);
    if (index > -1) {
      this.preferenciasUsuario.splice(index, 1);
    } else {
      this.preferenciasUsuario.push(valor);
    }
  }

  isPreferenciaSeleccionada(valor: string): boolean {
    return this.preferenciasUsuario.includes(valor);
  }


  canalesDisponibles: string[] = ['Email', 'SMS', 'Notificaciones Push', 'WhatsApp'];

  canalesSeleccionados: string[] = [];
}
