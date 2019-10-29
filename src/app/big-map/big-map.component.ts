import { PowerBank } from 'src/app/model/PowerBank';
import { StationMarkerComponent } from './../station-marker/station-marker.component';
import { GenericStation } from './../model/GenericStation';
import { GenericStationService } from './../service/generic-station.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MapComponent, ViewComponent } from 'ngx-openlayers';
import { Feature, MapBrowserEvent } from 'openlayers';
import { toLonLat, fromLonLat } from 'ol/proj';
import { GeoJsonRoutingService } from '../service/geo-json-routing.service';
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

    private isRouteOk: boolean;

    private myPosition: Localisation;

    public stationMap: Map<number, GenericStation>;

    constructor(private stationService: GenericStationService, private geoJsonService: GeoJsonRoutingService) {
        this.myPosition = new Localisation();
        this.stationMap = new Map<number, GenericStation>();
    }

    public ngOnInit() {
        this.isRouteOk = false;
    }

    public ngAfterViewInit() {

        this.getPosition().then(pos => {
            console.log(`Position: ${pos.lng} ${pos.lat}`);
            this.myPosition.longitude = pos.lng;
            this.myPosition.latitude = pos.lat;
        });
        this.loadStations();
    }

    loadStations(): void {
        console.log('loadStations()');

        this.stationService.findAll().subscribe(
            (list: GenericStation[]) => {
                console.log('tototo : ' + list.length);

                for (const station of list) {
                    console.log('station : ' + station.id);
                    this.stationMap.set(station.id, station);
                    console.log(this.stationMap.get(station.id));
                }
                console.log(this.stationMap.size + ' stations loaded');
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

                this.smoothMoveTo(station.localisation, 15);
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
                const coordToMove = Localisation.betweenTwoPoints(begin, end);
                const zoom = this.adjustZoomToRoute(begin, end);
                this.smoothMoveTo(coordToMove, zoom);
            }
        );
    }

    /**
     * Zoom not calibrated at all
     * @param begin : begin of the route
     * @param end : end of the route
     */
    adjustZoomToRoute(begin: Localisation, end: Localisation): number {
        const beginC = fromLonLat(Localisation.toArray(begin));
        const endC = fromLonLat(Localisation.toArray(end));
        const val = Math.sqrt((endC[0] - beginC[0]) * (endC[0] - beginC[0]) + (endC[1] - beginC[1]) * (endC[1] - beginC[1]));

        const zoom = 20.8 - (0.0018 * val);

        return zoom;
    }

    smoothMoveTo(coord: Localisation, zoomVal: number): void {
        console.log('smoothMoveTo(' + coord + ')');

        const transCoord = fromLonLat(Localisation.toArray(coord));
        this.view.instance.animate({
            zoom: zoomVal,
            center: [transCoord[0], transCoord[1]],
            duration: 1000
        });
    }
}
