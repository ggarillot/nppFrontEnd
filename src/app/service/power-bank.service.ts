import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PowerBank } from '../model/PowerBank';

@Injectable({
  providedIn: 'root'
})
export class PowerBankService {

  private static uri = 'http://localhost:8080/npp/powerBank';

  constructor(private http: HttpClient) { }

  public add(powerBank: PowerBank): Observable<PowerBank> {
    return this.http.post<PowerBank>(PowerBankService.uri + '/add', powerBank);
  }

  public update(powerBank: PowerBank): Observable<PowerBank> {
    return this.http.put<PowerBank>(PowerBankService.uri + '/update', powerBank);
  }

  public delete(id: number) {
    return this.http.delete<PowerBank>(PowerBankService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<PowerBank> {
    return this.http.get<PowerBank>(PowerBankService.uri + '/get/' + { id });
  }

  public findAll(): Observable<PowerBank[]> {
    return this.http.get<PowerBank[]>(PowerBankService.uri + '/get');
  }
}
