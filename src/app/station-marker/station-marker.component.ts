import { GenericStation } from './../model/GenericStation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-marker',
  templateUrl: './station-marker.component.html',
  styleUrls: ['./station-marker.component.css']
})
export class StationMarkerComponent implements OnInit {

  private station: GenericStation;

  constructor() { }

  public setStation(station: GenericStation): void {
    this.station = station;
    console.log(this.station);
  }

  ngOnInit() {
  }

}
