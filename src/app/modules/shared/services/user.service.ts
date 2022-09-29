import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserModel } from '../../auth/models/user.model';
import { BASE_URL } from '../http/http.utils';
import { HttpService } from '../http/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  private userInfo$ = new BehaviorSubject<UserModel>(new UserModel());

  userInfo = this.userInfo$.asObservable();

  setUserInfo(value: UserModel) { this.userInfo$.next(value); }

  setUserMeta(userMeta: UserModel) {
    this.setUserInfo(userMeta)
  }

  public getUserInfo(userId: string): Observable<any> {
    return this.httpService.Get(BASE_URL + '/profile').pipe(map((x) => {
      return x;
    }))
  }

  public updateUserInfo(userInfo: UserModel): Observable<any> {
    return this.httpService.Put(BASE_URL + '/profile', userInfo).pipe(map((x) => {
      return x;
    }))
  }

}
