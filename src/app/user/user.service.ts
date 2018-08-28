import { Injectable } from '@angular/core';
import { User } from './user';
import {  Observable,of } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  withCredentials: true,
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:6969';
  constructor(private http : Http) {}
  Login (user : User): Observable<Response> {
    console.log(user);
    return this.http
    .post(`${this.baseUrl}/api/auth`, undefined, {headers: this.getHeaders(), withCredentials: true,params:{user:JSON.stringify(user)}});
  }

  Logout(): Observable<Response> {
    return this.http
    .delete(`${this.baseUrl}/api/auth` , {headers: this.getHeaders(), withCredentials: true});
  }


  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
