import { Observable } from 'rxjs';
import { GenericUser } from './../model/GenericUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericUserService {

  private static uri = 'http://localhost:8080/npp/guser';

  constructor(private http: HttpClient) { }

  public add(genericUser: GenericUser): Observable<GenericUser> {
    return this.http.post<GenericUser>(GenericUserService.uri + '/add', genericUser);
  }

  public update(genericUser: GenericUser): Observable<GenericUser> {
    return this.http.put<GenericUser>(GenericUserService.uri + '/update', genericUser);
  }

  public delete(id: number) {
    return this.http.delete<GenericUser>(GenericUserService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<GenericUser> {
    return this.http.get<GenericUser>(GenericUserService.uri + '/get/' + { id });
  }

  public findAll(): Observable<GenericUser[]> {
    return this.http.get<GenericUser[]>(GenericUserService.uri + '/get');
  }

  // public findByUsername(username: string): Observable<GenericUser> {
  //   return this.http.get<GenericUser>(GenericUserService.uri + '/get/' + { username } );
  // }

}
