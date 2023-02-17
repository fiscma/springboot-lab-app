import { withInterceptorsFromDi } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../service/user-service.service';
import { AppComponent } from '../app.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  constructor(private httpClient: HttpClient) { }

  result!: string;

  customHeaders= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*');

  ngOnInit () {
    this.getUsers();
    console.log(this.customHeaders);
  }

  getUsers() {
    this.httpClient.get('http://localhost:8088/api/user/get', {'headers': this.customHeaders})
    .subscribe(data => {
      this.result = (data as any)['userName'];
      console.log(this.result);
    });
  }

  users = USERS;

  selectedUser?: User;
  onSelect(hero: User): void {
  this.selectedUser = hero;

}

}
