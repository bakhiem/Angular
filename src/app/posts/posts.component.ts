import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Post[] = [];
  
  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.getPost();
  }
 
  getPost(): void {
    this.postService.getAll()
    .subscribe(posts => this.posts = posts);
  }
}
