import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericStation } from '../model/GenericStation';

@Injectable({
  providedIn: 'root'
})
export class GenericStationService {

  private static uri = 'http://localhost:8080/npp/gstation';

  constructor(private http: HttpClient) { }

  public add(genericStation: GenericStation): Observable<GenericStation> {
    return this.http.post<GenericStation>(GenericStationService.uri + '/add', genericStation);
  }

  public update(genericStation: GenericStation): Observable<GenericStation> {
    return this.http.put<GenericStation>(GenericStationService.uri + '/update', genericStation);
  }

  public delete(id: number) {
    return this.http.delete<GenericStation>(GenericStationService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<GenericStation> {
    return this.http.get<GenericStation>(GenericStationService.uri + '/get/' + { id });
  }

  public findAll(): Observable<GenericStation[]> {
    return this.http.get<GenericStation[]>(GenericStationService.uri + '/get');
  }
}
