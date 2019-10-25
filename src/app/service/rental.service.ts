import { Observable } from 'rxjs';
import { Rental } from './../model/Rental';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private static uri = 'http://localhost:8080/npp/rental';

  constructor(private http: HttpClient) { }

  public add(rental: Rental): Observable<Rental> {
    return this.http.post<Rental>(RentalService.uri + '/add', rental);
  }

  public update(rental: Rental): Observable<Rental> {
    return this.http.put<Rental>(RentalService.uri + '/update', rental);
  }

  public delete(id: number) {
    return this.http.delete<Rental>(RentalService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<Rental> {
    return this.http.get<Rental>(RentalService.uri + '/get/' + { id });
  }

  public findAll(): Observable<Rental[]> {
    return this.http.get<Rental[]>(RentalService.uri + '/get');
  }
}
