import { PowerBank } from 'src/app/model/PowerBank';
import { NormalStationService } from './../../service/normal-station.service';
import { NormalStation } from './../../model/NormalStation';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericStation } from 'src/app/model/GenericStation';
import { GenericStationService } from 'src/app/service/generic-station.service';

@Component({
  selector: 'app-list-station',
  templateUrl: './list-station.component.html',
  styleUrls: ['./list-station.component.css']
})
export class ListStationComponent implements OnInit {

  stationList: GenericStation[];
  powerBankList: PowerBank[];

  constructor(private genericStationService: GenericStationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.stationList = new Array<GenericStation>();
  }

  ngOnInit() {
    this.loadList();
  }

  loadList(): void {
    this.stationList = new Array<GenericStation>();
    this.genericStationService.findAll().subscribe((listStationReq) => {
      listStationReq.forEach(station => {
        this.genericStationService.getPowerBankListOfThisStation(station.id).subscribe((listPowerBankReq) => {
          station.powerBankList = listPowerBankReq;
          this.stationList.push(station);
        });
      });
    });
  }

  delete(id: number) {
    this.genericStationService.delete(id).subscribe((response) => {
      this.loadList();
    });
  }
}
