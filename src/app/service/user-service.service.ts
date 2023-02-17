import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  result: String[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit () {
    this.httpClient.get('http://localhost:8088/users/find/all')
    .subscribe(data => {
      this.result = (data as any)['userName'];
      console.log(this.result);
    });
  }
}
