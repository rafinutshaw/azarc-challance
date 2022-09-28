import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthHelper } from '../../auth/helper/auth.helper';
import { UserModel } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userInfo$ = new BehaviorSubject<UserModel>(new UserModel());

  userInfo = this.userInfo$.asObservable();

  setUserInfo(value: UserModel) { this.userInfo$.next(value); }

  setUserMeta(userMeta: UserModel) {
    this.setUserInfo(userMeta)
  }

  public getUserInfo(userId: string): Observable<UserModel> {
    return of(AuthHelper.getUserInfo())
  }

  public updateUserInfo(userInfo: UserModel): Observable<UserModel> {
    AuthHelper.setUserInfo(userInfo)
    return of(userInfo)
  }

}
