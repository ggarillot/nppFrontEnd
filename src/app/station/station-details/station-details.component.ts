import { PowerBankService } from './../../service/power-bank.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericStation } from './../../model/GenericStation';
import { PowerBank } from './../../model/PowerBank';
import { Component, OnInit } from '@angular/core';
import { GenericStationService } from 'src/app/service/generic-station.service';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  genericStation: GenericStation;
  emptySlots: Array<number>;

  constructor(private genericStationService: GenericStationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.emptySlots = new Array<number>();
  }

  ngOnInit() {
    const idStation = this.activatedRoute.snapshot.params.idStation as number;
    this.loadStation(idStation);
  }

  loadStation(id: number) {
    this.genericStationService.getById(id).subscribe((station) => {

      this.genericStationService.getPowerBankListOfThisStation(id).subscribe((list) => {

        station.powerBankList = list;
        this.genericStation = station;

        const nEmptySlots = station.nslots - list.length;
        this.emptySlots = new Array<number>(nEmptySlots);
      });
    });
  }

  attachPowerBank(id: number) {
    this.genericStationService.addPowerBank(id).subscribe(() => this.loadStation(id));
  }
}
