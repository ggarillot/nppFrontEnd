import { AuthenticationService } from './../service/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrator } from './../model/Administrator';
import { StandardUser } from './../model/StandardUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sUser: StandardUser;
  admin: Administrator;
  form: FormGroup;
  invalidLogin = false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  login(): void {
    // if (this.sUser.email === 'admin' && this.sUser.password === 'admin') {
    //   if (this.email === 'admin' && this.password === 'admin') {
    //   this.router.navigate(['home']);
    //   alert('Vous êtes connecté');
    // } else {
    //   alert('Invalid');
    // }

    if (this.loginservice.authenticate(this.form.value.email, this.form.value.password)) {
      this.router.navigate(['home']);
      this.invalidLogin = false;
      console.log('true');
    } else {
      this.invalidLogin = true;
      console.log('false');
    }

  }

}
