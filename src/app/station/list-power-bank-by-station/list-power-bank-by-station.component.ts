import { PowerBank } from 'src/app/model/PowerBank';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericStationService } from 'src/app/service/generic-station.service';
import { GenericStation } from 'src/app/model/GenericStation';

@Component({
  selector: 'app-list-power-bank-by-station',
  templateUrl: './list-power-bank-by-station.component.html',
  styleUrls: ['./list-power-bank-by-station.component.css']
})
export class ListPowerBankByStationComponent implements OnInit {

  powerBankByStationList: PowerBank[];
  genericStation: GenericStation;

  constructor(private genericStationService: GenericStationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idStation = this.activatedRoute.snapshot.params.idStation as number;
    this.genericStationService.getById(idStation).subscribe((response) => {
      this.genericStation = response;
    });

    this.genericStationService.getPowerBankListOfThisStation(idStation).subscribe((response) => {
      this.powerBankByStationList = response;
    });
  }

}
