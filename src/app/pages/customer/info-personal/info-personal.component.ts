import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarMiCuentaComponent } from '../../../shared/components/navbar-mi-cuenta/navbar-mi-cuenta.component';
import { UserService } from '../../../core/services/user.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-info-personal',
  standalone: true,
  imports: [NavbarMiCuentaComponent,ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css'] // Asegúrate de usar styleUrls en plural
})
export class InfoPersonalComponent {
  user: any;
  userForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder){
      this.user = this.userService.getCurrentUserInfo();
      console.log(this.user);
      this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.userService.updateUserImage(file);
      this.user = this.userService.getCurrentUserInfo();
    }
  }

  
}
