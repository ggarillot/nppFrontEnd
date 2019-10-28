import { Observable } from 'rxjs';
import { Administrator } from './../model/Administrator';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  private static uri = 'http://localhost:8080/npp/administrator';

  constructor(private http: HttpClient) { }

  public add(administrator: Administrator): Observable<Administrator> {
    return this.http.post<Administrator>(AdministratorService.uri + '/add', administrator);
  }

  public update(administrator: Administrator): Observable<Administrator> {
    return this.http.put<Administrator>(AdministratorService.uri + '/update', administrator);
  }

  public delete(id: number) {
    return this.http.delete<Administrator>(AdministratorService.uri + '/delete/' + id);
  }

  public getById(id: number): Observable<Administrator> {
    return this.http.get<Administrator>(AdministratorService.uri + '/get/' + id);
  }

  public findAll(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(AdministratorService.uri + '/get');
  }
}
