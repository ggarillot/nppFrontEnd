import { GenericUserService } from './generic-user.service';
import { GenericUser } from './../model/GenericUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: GenericUser;

  constructor(private userService: GenericUserService) { }

  authenticate(username: string, password: string) {
    // console.log(this.userService.findByUsername(username));
    // this.userService.findByUsername(username).subscribe(response => {
    //   this.user.username = response.username;
    //   this.user.password = response.password;
    //   console.log(response);
    // });


    if (username === 'admin' && password === 'password') {
    // if (username === this.user.username && password === this.user.password) {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }


  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
