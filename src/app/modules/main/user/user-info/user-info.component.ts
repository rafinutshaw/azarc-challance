import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/modules/auth/models/user.model';
import { UserService } from 'src/app/modules/shared/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfoForm!: FormGroup;
  user: UserModel = new UserModel();
  officeLocations: string[] = ['Los Angles', 'London', 'Cape Town']
  loading: boolean = false
  message: string = ''
  constructor(private _route: ActivatedRoute, private formBuilder: FormBuilder, private _userService: UserService
  ) {

  }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.user = data['userInfo'] as UserModel
      this.initSignupForm(this.user);
    })
  }


  private initSignupForm(initialValue: UserModel) {
    this.userInfoForm = this.formBuilder.group({
      residentialAddress: [initialValue.residentialAddress ?? "", [Validators.required]],
      officeAddress: [initialValue.officeAddress ?? "", [Validators.required]],
    });
  }

  onSubmit() {
    this.user.officeAddress = this.userInfoForm.value.officeAddress
    this.user.residentialAddress = this.userInfoForm.value.residentialAddress
    this.loading = true
    this._userService.updateUserInfo(this.user).subscribe(
      {
        error: (e) => { this.message = 'Something went wrong!'; this.loading = false },
        complete: () => { this.message = 'Updated successfully!'; this.loading = false },
      }
    )

  }

}
