import { User } from './../../../shared/models/user.model';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service'; // Asegúrate de que la ruta sea correcta
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.matchPassword]]
    });
  }

  // Función para comparar las contraseñas
  matchPassword(control: any) {
    const password = control.root?.get('password')?.value;
    if (password !== control.value) {
      return { mismatch: true };
    }
    return null;
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;

      // Llamada al servicio para registrar el nuevo usuario
      const registeredUser = this.authService.registerUser(newUser);

      if (registeredUser) {
        // Si el registro es exitoso, redirige a la página de inicio
        this.router.navigate(['/']);
      } else {
        // Muestra un error si el usuario ya existe (esto lo manejamos en el servicio)
        alert('El usuario ya existe');
      }
    } else {
      // Si el formulario no es válido, muestra un mensaje de error
      alert('Por favor, completa todos los campos correctamente');
    }
  }
}
