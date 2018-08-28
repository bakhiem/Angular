import { Component, OnInit,OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Post }  from '../post';
import { PostService } from '../service/post.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit,OnDestroy {
  post : Observable<Post>;
  public subscription : Subscription;
  constructor(
    private route: ActivatedRoute,
    private postService : PostService,
    private location: Location
  ) {}

  ngOnInit() {
    this.handleParam();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  handleParam(){
    this.subscription = this.route.params.subscribe((params: ParamMap) =>{
      let id =  params['id'];
      this.postService.getPost(id).subscribe(
        (data : any) => {
          this.post = JSON.parse(data['_body']) ;
        }
      )
    })
  }
}
