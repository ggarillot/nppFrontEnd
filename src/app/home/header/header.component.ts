import { Router } from '@angular/router';
import { GenericUserService } from './../../service/generic-user.service';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { GenericUser } from 'src/app/model/GenericUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private loginService: AuthenticationService, private service: GenericUserService, private auth: AuthenticationService, private userService: GenericUserService,
    // tslint:disable-next-line:align
    private router: Router) { }
  ngOnInit() {
    if (this.auth.isUserLoggedIn) {
      // const username = sessionStorage.getItem('username') as string;
      const username = this.loginService.getUser;

    }


  }

}
