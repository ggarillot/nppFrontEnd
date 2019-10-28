import { GenericUserService } from './../service/generic-user.service';
import { AuthenticationService } from './../service/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  hide = true;

  constructor(private router: Router, private loginservice: AuthenticationService, private service: GenericUserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login(): void {
    (this.loginservice.authenticate(this.form.value.username, this.form.value.password).subscribe(
      data => {

        this.service.findByUsername(this.form.value.username).subscribe(response => {
          this.loginservice.user = response;
          sessionStorage.setItem('role', response.role);
          // console.log(sessionStorage.setItem('role', response.role));
          this.router.navigate(['/home']);
          this.invalidLogin = false;
        });

      }, error => {
        this.invalidLogin = true;
      }
    ));
  }

}


