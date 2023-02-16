import { Component } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = USERS;

  selectedUser?: User;
  onSelect(hero: User): void {
  this.selectedUser = hero;
}

}
