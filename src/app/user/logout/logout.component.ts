import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService }  from '../user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService,
     private router : Router) { }

  ngOnInit() {
    this.userService.Logout() .subscribe(
      (res) => {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/']) ;
      },
      err => {
        console.log(err);
      
      }
    );;
    
  }

}