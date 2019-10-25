
import { Observable } from 'rxjs';
import { NormalStation } from './../model/NormalStation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormalStationService {

  private static uri = 'http://localhost:8080/npp/station';

  constructor(private http: HttpClient) { }

  public add(normalStation: NormalStation): Observable<NormalStation> {
    return this.http.post<NormalStation>(NormalStationService.uri + '/add', normalStation);
  }

  public update(normalStation: NormalStation): Observable<NormalStation> {
    return this.http.put<NormalStation>(NormalStationService.uri + '/update', normalStation);
  }

  public delete(id: number) {
    return this.http.delete<NormalStation>(NormalStationService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<NormalStation> {
    return this.http.get<NormalStation>(NormalStationService.uri + '/get/' + { id });
  }

  public findAll(): Observable<NormalStation[]> {
    return this.http.get<NormalStation[]>(NormalStationService.uri + '/get');
  }
}
