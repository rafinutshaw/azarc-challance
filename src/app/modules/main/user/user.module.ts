import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoResolver } from '../../shared/resolvers/user-info.resolver';
import { UserInfoComponent } from './user-info/user-info.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserInfoComponent,
    resolve: {
      userInfo: UserInfoResolver,
    }
  },]

@NgModule({
  declarations: [
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
  ]
})
export class UserModule { }
