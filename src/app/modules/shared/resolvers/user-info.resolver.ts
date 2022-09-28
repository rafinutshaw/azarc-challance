import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';
import { AuthHelper } from '../../auth/helper/auth.helper';
import { UserModel } from '../../auth/models/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoResolver implements Resolve<UserModel> {
  constructor(private router: Router, private _userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    return this._userService.getUserInfo(AuthHelper.getLoggedInUserId()).pipe(
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
