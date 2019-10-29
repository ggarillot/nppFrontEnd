import { StandardUser } from './../../model/StandardUser';
import { StandardUserService } from './../../service/standard-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericUserService } from 'src/app/service/generic-user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  user: StandardUser;
  read: boolean;
  form: FormGroup;
  hide = true;


  // tslint:disable-next-line:max-line-length
  constructor(private auth: AuthenticationService, private userService: GenericUserService, private sUserService: StandardUserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.read = true;

    const username = this.activatedRoute.snapshot.params.username as string;
    console.log(username);
    
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
