import { Router } from '@angular/router';
import { SubscriptionService } from './../../service/subscription.service';
import { Subscription } from './../../model/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.css']
})
export class ListSubscriptionComponent implements OnInit {

  subscriptionList: Subscription[];

  constructor(private subscriptionService: SubscriptionService, private router: Router) { }

  ngOnInit() {
    this.subscriptionService.findAll().subscribe((response) => {
      this.subscriptionList = response;
    });
  }

}
