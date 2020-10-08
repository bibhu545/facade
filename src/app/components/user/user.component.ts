import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from 'src/app/utils/models';
import { UserService } from "../../services/user.service";
import * as UserActions from "../../user.actions"
import * as fromUser from "../../user.selectors"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService, private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(new UserActions.LoadUsers());

    this.store.pipe(select(fromUser.getUsers)).subscribe(users => {
      this.users = users
    })

    // this.users = this.userService.renderUsers();
  }

}
