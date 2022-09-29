import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../auth/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userService: UserService, private _route: ActivatedRoute,) {
  }
  searchText: string = ''
  employees: UserModel[] = []

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.employees = data['employees'] as UserModel[]
    })
  }

}
