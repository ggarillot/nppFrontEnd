import { User } from './../model/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GenericUserService } from './generic-user.service';
import { GenericUser } from './../model/GenericUser';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: GenericUser;

  constructor(private userService: GenericUserService, private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {


    // if (username === 'admin' && password === 'password') {
    //   sessionStorage.setItem('username', username);
    //   return true;
    // } else {
    //   return false;
    // }
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.httpClient.get<User>('http://localhost:8080/npp/guser/validateLogin', { headers })
      .pipe(map(userData => {
        sessionStorage.setItem('username', username);

        return userData;
      }));


  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
