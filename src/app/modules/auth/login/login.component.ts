import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_IMAGES } from 'src/app/constants';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { AuthHelper } from '../helper/auth.helper';
import { UserModel } from '../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: SocialUser = new SocialUser;
  public logo: string = APP_IMAGES.LOGO;

  constructor(private _socialAuthService: SocialAuthService, private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this._socialAuthService.authState.subscribe(user => {
      console.log(user)
      if (user) {
        const userInfo = new UserModel({ firstName: user.firstName, lastName: user.lastName, photoUrl: user.photoUrl })
        this._userService.setUserMeta(userInfo)
        AuthHelper.setToken(user)
        AuthHelper.setUserInfo(userInfo)
        this.router.navigateByUrl('/');
      }
    });
  }

  public signInWithGoogle(): void {
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}