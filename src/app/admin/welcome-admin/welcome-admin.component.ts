import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
