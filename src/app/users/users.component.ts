import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../user/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users: User[];

  constructor(private userService: UsersService,
    private activateRoute: ActivatedRoute) {

    this.activateRoute.params.subscribe(params => {
      this.userService.getUsers(params['nation']).subscribe(
        users => this.users = users
      )
    });
  }



}
