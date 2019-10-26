import { PowerBank } from 'src/app/model/PowerBank';
import { StationMarkerComponent } from './../station-marker/station-marker.component';
import { GenericStation } from './../model/GenericStation';
import { GenericStationService } from './../service/generic-station.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MapComponent, ViewComponent, SourceVectorComponent } from 'ngx-openlayers';
import { Feature, MapBrowserEvent, coordinate } from 'openlayers';
import { toLonLat, fromLonLat } from 'ol/proj';
import { GeoJsonRoutingService } from '../service/geo-json-routing.service';
import GeoJSON from 'ol/format/GeoJSON';
import LineString from 'ol/geom/LineString';
import { Localisation } from '../model/Localisation';
import { Geometry } from 'geojson';

@Component({
    selector: 'app-big-map',
    templateUrl: './big-map.component.html',
    styleUrls: ['./big-map.component.css']
})
export class BigMapComponent implements AfterViewInit, OnInit {

    private static mapTilerApiKey = 'JqtuhpUnmw7Cqb9uYBPg';

    @ViewChild('map', { static: false })
    public map: MapComponent;

    @ViewChild('view', { static: false })
    public view: ViewComponent;

    @ViewChild('marker', { static: false })
    public marker: StationMarkerComponent;

    private routeGeom;

    private isRouteOk = false;

    private myPosition: Localisation;

    public stationMap: Map<number, GenericStation>;

    constructor(private stationService: GenericStationService, private geoJsonService: GeoJsonRoutingService) {
        this.stationMap = new Map<number, GenericStation>();
        this.myPosition = new Localisation();
    }

    public ngOnInit() {
    }

    public ngAfterViewInit() {

        this.getPosition().then(pos => {
            console.log(`Position: ${pos.lng} ${pos.lat}`);
            this.myPosition.longitude = pos.lng;
            this.myPosition.latitude = pos.lat;
        });

        this.stationService.findAll().subscribe(
            (list: GenericStation[]) => {

                for (const station of list) {
                    this.stationMap.set(station.id, station);
                }
                console.log(this.stationMap.entries.length + ' stations loaded');
            }
        );
    }

    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            },
                err => { reject(err); });
        });
    }

    setMarkerStation(station: GenericStation): void {
        if (station != null) {
            this.stationService.getPowerBankListOfThisStation(station.id).subscribe(
                (listP: PowerBank[]) => {
                    station.powerBankList = listP;
                    this.marker.setStation(station);
                }
            );
        } else {
            this.marker.setStation(null);
        }
    }

    handleClick(event: MapBrowserEvent) {

        const map = event.map;
        const features = map.getFeaturesAtPixel(event.pixel);
        const coord = Localisation.fromArray(toLonLat(map.getCoordinateFromPixel(event.pixel)));
        console.log(coord);
        if (features && features.length > 0) {
            const feature = features[0] as Feature;

            if (feature.getId() === 'currentLocation') {
                this.setMarkerStation(null);
                this.isRouteOk = false;
            } else {
                this.isRouteOk = false;
                const stationId = feature.getId() as number;
                const station = this.stationMap.get(stationId);

                Object.assign(coord, station.localisation);

                this.setMarkerStation(station);

                const coordToMove = Localisation.betweenTwoPoints(coord, this.myPosition);
                this.smoothMoveTo(coordToMove);
                this.retrieveRoute(this.myPosition, coord);

            }
        } else {
            this.setMarkerStation(null);
            this.isRouteOk = false;
        }
    }

    retrieveRoute(begin: Localisation, end: Localisation): void {

        this.routeGeom = [];

        let route;

        this.geoJsonService.getRouting(begin, end).subscribe(
            (resp) => {
                route = resp.features[0].geometry;

                route.coordinates.forEach((f: Geometry) => {

                    this.routeGeom.push(f);
                });

                console.log(this.routeGeom);
                this.isRouteOk = true;
            }
        );
    }

    smoothMoveTo(coord: Localisation): void {
        console.log('smoothMoveTo(' + coord + ')');

        const transCoord = fromLonLat(Localisation.toArray(coord));
        this.view.instance.animate({
            zoom: 15,
            center: [transCoord[0], transCoord[1]],
            duration: 1000
        });
    }

}
