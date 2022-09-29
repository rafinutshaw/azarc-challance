import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { AuthHelper } from '../../auth/helper/auth.helper';
import { UserModel } from '../../auth/models/user.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private _userService: UserService, private _socialAuthService: SocialAuthService, private router: Router) { }
  user: UserModel = new UserModel();
  ngOnInit(): void {
    const token = AuthHelper.getToken()
    this._userService.setUserMeta(new UserModel({ firstName: token.firstName, lastName: token.lastName, photoUrl: token.photoUrl }))

    this._userService.userInfo.subscribe((user) => {
      this.user = user
    })

  }

  public logout(): void {
    this.router.navigateByUrl('/login');

    this._socialAuthService.signOut();
    AuthHelper.clearToken()
  }
}
