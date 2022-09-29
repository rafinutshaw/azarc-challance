import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserModel } from '../../auth/models/user.model';
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
    return this.httpService.Get('http://localhost:3000/profile').pipe(map((x) => {
      return x;
    }))
  }

  public updateUserInfo(userInfo: UserModel): Observable<any> {
    return this.httpService.Put('http://localhost:3000/profile', userInfo).pipe(map((x) => {
      return x;
    }))
  }

}
