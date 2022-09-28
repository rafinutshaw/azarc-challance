import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _fakeUsers: UserModel[] = []

  constructor() { }

  public getAllEmployees(): Observable<any> {
    if (!this._fakeUsers.length) {
      for (let i = 1; i < 21; i++) {
        this._fakeUsers.push(new UserModel({ userId: i.toString(), firstName: 'auto' + i, lastName: 'user' + i }))
      }
    }
    return of(this._fakeUsers)
  }
}
