import { FormsModule } from '@angular/forms';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { UserService } from './../../../core/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  standalone: true,
  imports: [NavbarMiCuentaComponent,FormsModule],
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css'] // Asegúrate de usar styleUrls en plural
})
export class InfoPersonalComponent {
  user: any;
  userForm:any;

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUserInfo();
    this.userForm = {...this.user};
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.userService.updateUserImage(file);
      this.user = this.userService.getCurrentUserInfo();
    }
  }

  actualizarInformacionPersonal(): void {
    this.userService.actualizarInformacionPersonal(this.userForm);
    this.user = {...this.userForm};
  }
}
