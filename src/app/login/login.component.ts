import { Administrator } from './../model/Administrator';
import { StandardUser } from './../model/StandardUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sUser: StandardUser;
  admin: Administrator;
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    // if (this.sUser.email === 'admin' && this.sUser.password === 'admin') {
      if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['home']);
      alert('Vous êtes connecté');
    } else {
      alert('Invalid');
    }
  }

}
