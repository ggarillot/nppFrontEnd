import { Observable } from 'rxjs';
import { GenericUser } from './../model/GenericUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericUserService {

  private static uri = 'http://localhost:8080/npp/guser';


  constructor(private http: HttpClient) { }

  public add(genericUser: GenericUser): Observable<GenericUser> {
    const username = 'a';
    const password = 'a';
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    return this.http.post<GenericUser>(GenericUserService.uri + '/add', genericUser, { headers });
  }

  public update(genericUser: GenericUser): Observable<GenericUser> {
    const username = 'a';
    const password = 'a';
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    return this.http.put<GenericUser>(GenericUserService.uri + '/update', genericUser, { headers });
  }

  public delete(id: number) {
    const username = 'a';
    const password = 'a';
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    return this.http.delete<GenericUser>(GenericUserService.uri + '/delete/' + { id }, { headers });
  }

  public getById(id: number): Observable<GenericUser> {
    const username = 'a';
    const password = 'a';
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    return this.http.get<GenericUser>(GenericUserService.uri + '/get/' + { id }, { headers });
  }

  public findAll(): Observable<GenericUser[]> {
    const username = 'a';
    const password = 'a';
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    return this.http.get<GenericUser[]>(GenericUserService.uri + '/get', { headers });
  }

  // public findByUsername(username: string): Observable<GenericUser> {
  //   return this.http.get<GenericUser>(GenericUserService.uri + '/get/' + { username } );
  // }

}
