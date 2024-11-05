import { UserService } from './../../../core/user.service';
import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarConfigComponent } from '../../../shared/components/navbar-config/navbar-config.component';
declare var bootstrap: any;

@Component({
  selector: 'app-config-security',
  standalone: true,
  imports: [NavbarConfigComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './config-security.component.html',
  styleUrl: './config-security.component.css'
})
export class ConfigSecurityComponent {
  user: any;
  passwordForm: FormGroup;
  showPassword: boolean = false;
  passwordTouched: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.user = this.userService.getCurrentUserInfo();
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    // Suscribirse a los cambios del campo de contraseña
    this.passwordForm.get('newPassword')?.valueChanges.subscribe(() => {
      this.passwordTouched = true;
    });
  }
  isPasswordSecure(): boolean {
    const password = this.passwordForm.get('newPassword')?.value;

    if (!password) {
      return false;
    }

    const hasMinimumLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasMinimumLength && hasNumber && hasUpperCase && hasSpecialChar;
  }
  passwordMismatch(): boolean{
    const newPassword = this.passwordForm.get('newPassword')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;
    return newPassword == confirmPassword;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onChangePassword() {
    const modal = new bootstrap.Modal(document.getElementById('confirmPasswordModal'));
    modal.show();
  }
  confirmPasswordChange() {
    // Aquí va la lógica para cambiar la contraseña
    const newPassword = this.passwordForm.get('newPassword')?.value;
    this.userService.updateUserPassword(newPassword)
    // Cierra el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('confirmPasswordModal'));
    modal.hide();
  }

  onEnable2FA() {
    console.log('Enabling 2FA...');
    console.log(this.userService.getCurrentUserPassword())
  }
}
