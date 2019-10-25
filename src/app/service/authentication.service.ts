import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(email: string, password: string) {
    if (email === 'admin' && password === 'password') {
      sessionStorage.setItem('email', email);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('email');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('email');
  }
}
