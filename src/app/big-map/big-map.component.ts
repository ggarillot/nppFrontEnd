import { GenericStation } from './../model/GenericStation';
import { GenericStationService } from './../service/generic-station.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MapComponent } from 'ngx-openlayers';
import { Feature, MapBrowserEvent, Overlay } from 'openlayers';

@Component({
  selector: 'app-big-map',
  templateUrl: './big-map.component.html',
  styleUrls: ['./big-map.component.css']
})
export class BigMapComponent implements AfterViewInit, OnInit {

  @ViewChild('map', { static: false })
  public map: MapComponent;

  public lonCoord: number;
  public latCoord: number;

  public lonCoordMarker: number;
  public latCoordMarker: number;

  public zoom: number;

  public stationMap;

  constructor(private stationService: GenericStationService) {
    this.stationMap = new Map();
  }

  public ngOnInit() {

    this.stationService.findAll().subscribe(
      (list: GenericStation[]) => {
        for (const station of list) {
          this.stationMap.set(station.id, station);
        }
      }
    );
  }

  public ngAfterViewInit() {

    this.getPosition().then(pos => {
      console.log(`Position: ${pos.lng} ${pos.lat}`);
      this.lonCoord = pos.lng;
      this.latCoord = pos.lat;

      this.lonCoordMarker = pos.lng;
      this.latCoordMarker = pos.lat;
      this.zoom = 10;
    });


  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => { reject(err); });
    });
  }

  handleMove(event: MapBrowserEvent) {
    document.getElementById('popupId').style.display = 'none';
  }

  handleClick(event: MapBrowserEvent) {

    const map = event.map;
    const features = event.map.getFeaturesAtPixel(event.pixel);
    if (features && features.length > 0) {
      const feature = features[0] as Feature;

      if (feature.getId() === 'currentLocation') {
        console.log('you are here');
      } else {
        const stationId = feature.getId() as number;
        const coord = this.stationMap.get(stationId);

        this.lonCoordMarker = coord.longitude;
        this.latCoordMarker = coord.latitude;

        document.getElementById('popupId').style.display = 'block';
        document.getElementById('popupIdContent').innerHTML = this.lonCoordMarker + ',' + this.latCoordMarker;
      }
    } else {
      document.getElementById('popupId').style.display = 'none';
    }
  }
}

class StationCoordinates {

  constructor(lo: number, la: number) {
    this.longitude = lo;
    this.latitude = la;
  }

  public longitude: number;
  public latitude: number;
}

