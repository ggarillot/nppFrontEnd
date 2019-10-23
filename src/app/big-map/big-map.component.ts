import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MapComponent } from 'ngx-openlayers';
import { interaction, Feature, geom, MapBrowserEvent } from 'openlayers';

@Component({
  selector: 'app-big-map',
  templateUrl: './big-map.component.html',
  styleUrls: ['./big-map.component.css']
})
export class BigMapComponent implements AfterViewInit {

  @ViewChild('map', { static: false })
  public map: MapComponent;

  public lonCoord: number;
  public latCoord: number;
  public zoom: number;

  public stationCoordinatesList: Array<StationCoordinates>;

  public hoverCoordinate;

  constructor() {
    this.hoverCoordinate = [0, 0];
    this.stationCoordinatesList = [];
    this.stationCoordinatesList.push(new StationCoordinates(5, 45));
    this.stationCoordinatesList.push(new StationCoordinates(5, 46));
    this.stationCoordinatesList.push(new StationCoordinates(6, 45));
    this.stationCoordinatesList.push(new StationCoordinates(6, 46));
  }

  public ngAfterViewInit() {
    this.map.instance.addInteraction(new MyInteraction());

    this.getPosition().then(pos => {
      console.log(`Position: ${pos.lng} ${pos.lat}`);
      this.lonCoord = pos.lng;
      this.latCoord = pos.lat;
      this.zoom = 10;
    });


  }

  public printYoupi(): void {
    console.log('youpi');
  }


  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => { reject(err); });
    });
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

class MyInteraction extends interaction.Interaction {
  private dragging;
  private selectedFeature;
  constructor() {
    super({
      handleEvent: (e: MapBrowserEvent) => {
        switch (e.type) {
          case 'pointerup':
            return this.handleUp(e);
            break;
          case 'pointerdown':
            return this.handleDown(e);
            break;
        }
        return true;
      }
    });
    this.dragging = false;
  }

  public handleDown(e: MapBrowserEvent) {
    const features = e.map.getFeaturesAtPixel(e.pixel);
    console.log('down');
    if (features && features.length > 0) {
      this.selectedFeature = features[0];
      return false;
    }
    return true;
  }

  public handleUp(e: MapBrowserEvent) {
    this.selectedFeature = null;
    console.log('up');
    return true;
  }

}
