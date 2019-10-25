import { PowerBank } from './../model/PowerBank';
import { NormalStation } from './../model/NormalStation';
import { GenericStation } from './../model/GenericStation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-details-light',
  templateUrl: './station-details-light.component.html',
  styleUrls: ['./station-details-light.component.css']
})
export class StationDetailsLightComponent implements OnInit {

  private station: GenericStation;
  constructor() { }

  ngOnInit() {
    this.station = new NormalStation();
    this.station.id = 1;
    this.station.nslots = 20;
    this.station.powerBankList = [];
  }

}
