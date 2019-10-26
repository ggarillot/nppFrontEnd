import { AuthenticationService } from './../service/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrator } from './../model/Administrator';
import { StandardUser } from './../model/StandardUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
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
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login(): void {
    (this.loginservice.authenticate(this.form.value.username, this.form.value.password).subscribe(
      data => {
        this.router.navigate(['home']);
        this.invalidLogin = false;
        console.log(this.form.value.username);

      }, error => {
        this.invalidLogin = true;
        console.log(this.form.value);
      }
    ));
  }

}


