import { StationMarkerComponent } from './../station-marker/station-marker.component';
import { GenericStation } from './../model/GenericStation';
import { GenericStationService } from './../service/generic-station.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MapComponent, OverlayComponent } from 'ngx-openlayers';
import { Feature, MapBrowserEvent, Overlay } from 'openlayers';

@Component({
  selector: 'app-big-map',
  templateUrl: './big-map.component.html',
  styleUrls: ['./big-map.component.css']
})
export class BigMapComponent implements AfterViewInit, OnInit {

  @ViewChild('map', { static: false })
  public map: MapComponent;

  @ViewChild('marker', { static: false })
  public marker: StationMarkerComponent;

  public lonCoord: number;
  public latCoord: number;

  public zoom: number;

  public stationMap: Map<number, GenericStation>;

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
    const features = map.getFeaturesAtPixel(event.pixel);
    if (features && features.length > 0) {
      const feature = features[0] as Feature;

      if (feature.getId() === 'currentLocation') {
        console.log('you are here');
        document.getElementById('popupId').style.display = 'none';
      } else {
        const stationId = feature.getId() as number;
        const station = this.stationMap.get(stationId);

        this.marker.setStation(station);

        document.getElementById('popupId').style.display = 'block';
      }
    } else {
      document.getElementById('popupId').style.display = 'none';
    }
  }
}
