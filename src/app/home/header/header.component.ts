import { Router } from '@angular/router';
import { GenericUserService } from './../../service/generic-user.service';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;

  constructor(private loginService: AuthenticationService, private auth: AuthenticationService, private userService: GenericUserService,
              private router: Router) { }
  ngOnInit() {
    if (this.auth.isUserLoggedIn) {
      this.username = sessionStorage.getItem('username') as string;
    }
  }

}
