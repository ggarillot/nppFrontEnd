import { GenericStation } from './../../model/GenericStation';
import { Router } from '@angular/router';
import { PowerBankService } from './../../service/power-bank.service';
import { Component, OnInit } from '@angular/core';
import { PowerBank } from 'src/app/model/PowerBank';

@Component({
  selector: 'app-list-power-bank',
  templateUrl: './list-power-bank.component.html',
  styleUrls: ['./list-power-bank.component.css']
})
export class ListPowerBankComponent implements OnInit {

  powerBankList: PowerBank[];

  constructor(private powerBankService: PowerBankService, private router: Router) { }

  ngOnInit() {
    this.powerBankService.findAll().subscribe((response) => {
      this.powerBankList = response;
    });
  }

 

}
