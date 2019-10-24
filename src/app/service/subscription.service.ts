import { Observable } from 'rxjs';
import { Subscription } from './../model/Subscription';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private static uri = 'http://localhost:8080/npp/subscription';

  constructor(private http: HttpClient) { }

  public add(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(SubscriptionService.uri + '/add', subscription);
  }

  public update(subscription: Subscription): Observable<Subscription> {
    return this.http.put<Subscription>(SubscriptionService.uri + '/update', subscription);
  }

  public delete(id: number) {
    return this.http.delete<Subscription>(SubscriptionService.uri + '/delete/' + { id });
  }

  public getById(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(SubscriptionService.uri + '/get/' + { id });
  }

  public findAll(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(SubscriptionService.uri + 'get');
  }
}
