import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { UserModel } from '../../auth/models/user.model';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesResolver implements Resolve<UserModel[]> {
  constructor(private router: Router, private _employeeService: EmployeeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> {
    return this._employeeService.getAllEmployees().pipe(
      mergeMap((x) => {
        if (x) {
          return of(x);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
