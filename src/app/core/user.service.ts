import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  getCurrentUserInfo() {
    if(this.authService.isAuthenticated()) {
      return this.authService.getCurrentUser();
    }
    else {
      return null;
    }
  }
  getCurrentUserPassword() {
    if(this.authService.isAuthenticated()) {
      return this.authService.getCurrentUser()?.password;
    }
    else {
      return null;
    }
  }

  actualizarInformacionPersonal(datosActualizados: any) {
    const usuario = this.authService.getCurrentUser();
    if(usuario) {
      Object.assign(usuario, datosActualizados);
    }
  }

  updateUserImage(image: File) {
    this.authService.UpdateUserImage(image);
  }

  updateUserPassword(password: string) {
    this.authService.UpdateUserPassword(password);
  }

}
