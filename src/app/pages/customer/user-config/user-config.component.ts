import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-config',
  standalone: true,
  imports: [],
  templateUrl: './user-config.component.html',
  styleUrl: './user-config.component.css'
})
export class UserConfigComponent {
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
