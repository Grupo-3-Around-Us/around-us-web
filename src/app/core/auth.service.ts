import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Users: User[] = [
    {
      id: 1,
      username: 'ignacioedu812',
      firstName: 'Ignacio',
      lastName: 'Rodriguez',
      email: 'john.doe@example.com',
      password: 'password',
      phone: '1234567890',
      image: null,
      imageURL: 'https://i.pinimg.com/564x/67/06/9f/67069fc48ec59212e83ae491dfa9f973.jpg',
    }
  ]

  constructor() { }

  private _currentUser: User | null = this.Users[0];

  getCurrentUser() {
    return this._currentUser;
  }

  getCurrentPassword() {
    return this._currentUser?.password;
  }

  isAuthenticated() {
    return !!this._currentUser;
  }

  UpdateUserImage(image: File) {
    if(this._currentUser) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if(this._currentUser){
          this._currentUser.imageURL = e.target?.result as string;
        }
      };
      reader.readAsDataURL(image);
      this._currentUser.image = image;
    }
  }
  UpdateUserPassword(password: string){
    if(this._currentUser){
      this._currentUser.password = password;
    }
  }
}
