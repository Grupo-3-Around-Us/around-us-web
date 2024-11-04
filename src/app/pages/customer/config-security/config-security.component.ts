import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarConfigComponent } from '../../../shared/components/navbar-config/navbar-config.component';

@Component({
  selector: 'app-config-security',
  standalone: true,
  imports: [NavbarConfigComponent],
  templateUrl: './config-security.component.html',
  styleUrl: './config-security.component.css'
})
export class ConfigSecurityComponent {
  passwordForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get isPasswordSecure(): boolean {
    const password = this.passwordForm.get('newPassword')?.value;
    return password && password.length >= 8;
  }

  get passwordMismatch(): boolean | undefined{
    const newPassword = this.passwordForm.get('newPassword')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;
    return newPassword !== confirmPassword && this.passwordForm.get('confirmPassword')?.touched;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onChangePassword() {
    if (this.passwordForm.valid && !this.passwordMismatch) {
      console.log('Changing password...');
    }
  }

  onEnable2FA() {
    console.log('Enabling 2FA...');
  }
}
