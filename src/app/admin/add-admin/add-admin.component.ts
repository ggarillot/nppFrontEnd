import { Router } from '@angular/router';
import { AuthenticationService } from './../../service/authentication.service';
import { AdministratorService } from './../../service/administrator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Administrator } from './../../model/Administrator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  form: FormGroup;
  admin: Administrator;
  hide = true;


  constructor(private adminService: AdministratorService, private loginservice: AuthenticationService, private router: Router) { }

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
      this.adminService.add(this.form.value).subscribe(response => this.router.navigate(['/home']));

      this.form.reset();
    }

  }

}
