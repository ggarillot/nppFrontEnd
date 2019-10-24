import { element } from 'protractor';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { state, trigger, transition, animate, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

}
