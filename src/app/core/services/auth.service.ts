import { UserPreferences } from './../../shared/models/user-preference.model';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { LoginCredentials } from '../../shared/models/login-credentials.model';

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
      phone: '123456789',
      image: null,
      imageURL: 'https://i.pinimg.com/564x/67/06/9f/67069fc48ec59212e83ae491dfa9f973.jpg',
      userPreferences: {
        preference:['Hackathons', 'Deep Learning','Competencias', 'Bootcamps','Python', 'C++', 'Java', 'TypeScript', 'Intermedio','Networking', 'Competir', 'Mixtos']
      },
      registeredEvents: [],
    },
    {
      id: 2,
      username: 'admin',
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@example.com',
      password: 'admin123',
      phone: '123456789',
      image: null,
      imageURL: 'https://i.pinimg.com/564x/67/06/9f/67069fc48ec59212e83ae491dfa9f973.jpg',
      userPreferences: {
        preference:['Hackathons', 'Deep Learning','Competencias', 'Bootcamps','Python', 'C++', 'Java', 'TypeScript', 'Intermedio','Networking', 'Competir', 'Mixtos']
      },
      registeredEvents: [],
    },
  ]

  constructor() { }

  private _currentUser: User | null = this.Users[1];

  getCurrentUser() {
    return this._currentUser;
  }

  getCurrentPassword() {
    return this._currentUser?.password;
  }

  isAuthenticated() {
    return this._currentUser ? true : false;
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

  login(credentials: LoginCredentials): User | null {
    console.log(this.Users)

    const user = this.Users.find(user => user.email === credentials.email && user.password === credentials.password);
    if(user) {
      this._currentUser = user;
      return user;
    }
    else {
      return null;
    }
  }

  UpdateUserPassword(password: string){
    if(this._currentUser){
      this._currentUser.password = password;
    }
  }

  registerUser(newUser: User): void {
    // Verifica si ya existe un usuario con el mismo email
    const existingUser = this.Users.find(user => user.email === newUser.email);
    if (existingUser) {
      console.error('El usuario ya existe');
      return;
    }

    // Agrega el nuevo usuario a la lista y asigna un id único
    newUser.id = this.Users.length ? Math.max(...this.Users.map(user => user.id)) + 1 : 1;
    newUser.username = ''
    this.Users.push(newUser);
  }
}
