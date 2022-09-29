import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../http/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpService) { }

  public getAllEmployees(): Observable<any> {
    return this.httpService.Get('http://localhost:3000/users').pipe(map((x) => {
      return x;
    }))

  }
}
