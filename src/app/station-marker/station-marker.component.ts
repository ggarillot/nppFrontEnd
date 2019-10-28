import { Localisation } from './../model/Localisation';
import { GenericStation } from './../model/GenericStation';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-station-marker',
    templateUrl: './station-marker.component.html',
    styleUrls: ['./station-marker.component.css']
})
export class StationMarkerComponent implements OnInit {

    private station: GenericStation;

    @Output() talk: EventEmitter<Localisation> = new EventEmitter<Localisation>();

    constructor() { }

    public setStation(station: GenericStation): void {
        this.station = station;
    }

    ngOnInit() {
    }

    sendRouteCalculatorRequest(loc: Localisation) {
        this.talk.emit(loc);
    }
}
