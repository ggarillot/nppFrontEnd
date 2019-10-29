import { AuthenticationService } from './../service/authentication.service';
import { GenericUserService } from './../service/generic-user.service';
import { GenericUser } from './../model/GenericUser';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: GenericUser;

  constructor(private router: Router, private service: GenericUserService, private auth: AuthenticationService
            , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.auth.isUserLoggedIn) {
      this.service.findByUsername(this.activatedRoute.snapshot.params.username).subscribe(data => {
        this.user = data;
        if (this.user.role !== 'ADMIN') {
          this.router.navigate(['/home']);
        }
      });
    }
  }

}
