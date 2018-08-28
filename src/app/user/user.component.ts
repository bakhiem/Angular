import { Component, OnInit } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { User }  from './user';
import { UserService }  from './user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   error : number = 0;
  user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private userService: UserService,
    private router : Router,
    private fb: FormBuilder) { }
   username : string = '';
   id : string = '';
  ngOnInit() {
    this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem("currentUser")){
      this.router.navigate(['/']) 
    }
  }
  onSubmit(){
    this.userService
    .Login(toUser(this.user.value))
    .subscribe(
      (res) => {
        this.error = -1;
        let r = JSON.parse(res['_body'])
        this.username = r.username
        this.id = r.id
        localStorage.setItem('currentUser',this.username);
        
        setTimeout(() => { this.router.navigate(['/'])  }, 1000);
        
      },
      err => {
        this.error = 1;
        console.log(err);
      
      }
    );
  }
}
function toUser(r:any): User{
  let user = <User>({
   username: r.username,
   password: r.password
 });
 return user;
}
