
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../service/post.service';
  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  posts : Observable<Post[]> ;
  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getPost();
  }
  getPost(): void {
    this.posts = this.postService.getPostHighLight();  
    console.log(this.posts);
}
}
