import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipeModule } from '../shared/pipes/pipe.module';
import { EmployeesResolver } from '../shared/resolvers/employees.resolver';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      employees: EmployeesResolver,

    }
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule
      ),
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mainRoutes),
    PipeModule
  ]
})
export class MainModule { }
