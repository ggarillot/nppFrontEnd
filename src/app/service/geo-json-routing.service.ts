import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureCollection } from 'geojson';
import { Localisation } from '../model/Localisation';

@Injectable({
  providedIn: 'root'
})
export class GeoJsonRoutingService {

  private static apiKey = '5b3ce3597851110001cf6248ba56f15007394898a3aacdf1073e2646';
  constructor(private http: HttpClient) { }

  public getRouting(begin: Localisation, end: Localisation): Observable<FeatureCollection> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
        Authorization: GeoJsonRoutingService.apiKey
      })
    };

    const beginJson = '[' + begin.longitude + ',' + begin.latitude + ']';
    const endJson = '[' + end.longitude + ',' + end.latitude + ']';
    const path = '{"coordinates":[' + beginJson + ',' + endJson + ']}';
    console.log(path);

    return this.http.post<FeatureCollection>('https://api.openrouteservice.org/v2/directions/foot-walking/geojson', path, httpOptions);
  }
}
