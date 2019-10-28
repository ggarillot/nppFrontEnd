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

  constructor(private genericStationService: GenericStationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idStation = this.activatedRoute.snapshot.params.idStation as number;
    this.genericStationService.getById(idStation).subscribe((station) => {

      this.genericStationService.getPowerBankListOfThisStation(idStation).subscribe((list) => {

        station.powerBankList = list;
        this.genericStation = station;
      }); 
    });



  }
}
