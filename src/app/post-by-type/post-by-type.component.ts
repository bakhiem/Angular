import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-post-by-type',
  templateUrl: './post-by-type.component.html',
  styleUrls: ['./post-by-type.component.css']
})
export class PostByTypeComponent implements OnInit {
  posts : Observable<Post[]> ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService
  ) {}
  ngOnInit() {
    this.posts = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>{
        if(this.route.snapshot.paramMap.get('type') != null ){
          return this.service.getPostByType(params.get('type'));
        }
        else if(this.route.snapshot.paramMap.get('author') != null){
          return this.service.getPostByAuth(params.get('author'));
        }
       
      })
        
    );
  }
}
