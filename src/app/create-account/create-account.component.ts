import { AuthenticationService } from './../service/authentication.service';
import { GenericUserService } from './../service/generic-user.service';
import { StandardUser } from './../model/StandardUser';
import { StandardUserService } from './../service/standard-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;
  user: StandardUser;
  hide = true;

  constructor(private userService: GenericUserService, private loginservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      surname: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  createAccount() {
    if (this.form.invalid) {
      alert('Invalid');
    } else {
      this.userService.add(this.form.value).subscribe(response => this.router.navigate(['/home']));
      alert('Compte créé');
      this.form.reset();
    }

  }

}
