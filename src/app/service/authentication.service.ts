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
    return this.httpClient.post<any>('http://localhost:8080/npp/authenticate', { username, password })
      .pipe(map(userData => {
        sessionStorage.setItem('username', username);
        const tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
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
