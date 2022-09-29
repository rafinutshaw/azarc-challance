import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BASE_URL } from '../http/http.utils';
import { HttpService } from '../http/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpService) { }

  public getAllEmployees(): Observable<any> {
    return this.httpService.Get(BASE_URL + '/users').pipe(map((x) => {
      return x;
    }))

  }
}
