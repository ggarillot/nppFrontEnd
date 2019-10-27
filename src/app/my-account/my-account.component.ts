import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StandardUserService } from './../service/standard-user.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { GenericUser } from './../model/GenericUser';
import { GenericUserService } from './../service/generic-user.service';
import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { StandardUser } from '../model/StandardUser';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user: StandardUser;
  read: boolean;
  form: FormGroup;
  hide = true;


  constructor(private auth: AuthenticationService, private userService: GenericUserService, private sUserService: StandardUserService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.read = true;

    const username = this.activatedRoute.snapshot.params.username as string;
    this.userService.findByUsername(username).subscribe((data) => { this.user = data; });

    // console.log(this.user.rentalList);

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  modifyAccount() {
    if (this.read === true) {
      this.read = false;
    } else {
      if (this.form.value.name !== null) {
        this.user.name = this.form.value.name;
      }
      if (this.form.value.surname !== null) {
        this.user.surname = this.form.value.surname;
      }
      if (this.form.value.email !== null) {
        this.user.email = this.form.value.email;
      }
      if (this.form.value.username !== null) {
        this.user.username = this.form.value.username;
      }
      if (this.form.value.password !== null) {
        this.user.password = this.form.value.password;
      }

      this.sUserService.update(this.user).subscribe((data) => { console.log(data); });
      this.read = true;
    }
  }

}
