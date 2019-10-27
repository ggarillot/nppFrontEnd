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


  constructor(private auth: AuthenticationService, private userService: GenericUserService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      const username = this.activatedRoute.snapshot.params.username as string;
      this.userService.findByUsername(username).subscribe((data) => {this.user = data; });
  }

}
