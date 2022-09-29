import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public constructor(protected http: HttpClient) { }

  public Get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
  public Put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }
}
