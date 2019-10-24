import { Observable } from 'rxjs';
import { StandardUser } from './../model/StandardUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandardUserService {

  private static uri = 'http://localhost:8080/npp/standardUser';

  constructor(private http: HttpClient) { }

  public add(standardUser: StandardUser): Observable<StandardUser> {
    return this.http.post<StandardUser>(StandardUserService.uri + '/add', standardUser);
  }

  public update(standardUser: StandardUser): Observable<StandardUser> {
    return this.http.put<StandardUser>(StandardUserService.uri + '/update', standardUser);
  }

  public delete(id: number) {
    return this.http.delete<StandardUser>(StandardUserService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<StandardUser> {
    return this.http.get<StandardUser>(StandardUserService.uri + '/get/' + { id });
  }

  public findAll(): Observable<StandardUser[]> {
    return this.http.get<StandardUser[]>(StandardUserService.uri + 'get');
  }
}
