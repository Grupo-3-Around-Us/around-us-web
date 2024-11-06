
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    RouterLink,
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  private authService = inject(AuthService);
  private fb=inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

 constructor(){
  this.loginForm=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
  });
 }
  controlHasError(control:string, error:string){
    return this.loginForm.controls[control]
  }

  private showSnackBar(message:string){
    this.snackBar.open(message, 'Cerrar',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  onSubmit(){
    if(this.loginForm.valid){
      const credentials = this.loginForm.value;

      const user = this.authService.login(credentials)

      if(user) {
        this.router.navigate(['customer/home']);
      }

      console.log('Credenciales:', credentials);
      this.showSnackBar('Inicio de sesion exitoso');
    }
  }

}
