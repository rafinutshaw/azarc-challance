import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './modules/auth/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { MainLayoutComponent } from './modules/main/main-layout/main-layout.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';
import { UserGuard } from './modules/shared/guards/user.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      }
    ],
    canActivate: [UserGuard],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./modules/main/main.module').then(
        (m) => m.MainModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
