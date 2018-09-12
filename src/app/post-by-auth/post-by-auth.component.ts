import { Component, OnInit,OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../service/post.service';
  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-by-auth',
  templateUrl: './post-by-auth.component.html',
  styleUrls: ['./post-by-auth.component.css']
})
export class PostByAuthComponent implements OnInit {

  perPage : number = 5;//config in this and mongodb :)
  currentPage : number = 1;
  totalPage : number ;
  posts : Observable<Post[]> ;
  pageNumbers : number[] = [];

  public subscription : Subscription;
  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getTotalPage();
    this.getPost();
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  getTotalPage() : void{
    this.route.params.subscribe((params: ParamMap) =>{
      let type =  params['author'];
      this.postService.getTotalPageAuth(type).subscribe(
        (data : any) => {
          let pages = (JSON.parse(data['_body']).totalPage)
          this.totalPage = Math.ceil(pages / this.perPage)  ;
          this.toArray(this.totalPage);
        }
      )
    })
  }
  getPost(): void {
    //isType
    this.subscription = this.route.params.subscribe((params: ParamMap) =>{
      let type =  params['author'];
      this.postService.getPostByAuth(type,this.currentPage).subscribe(
        (data : any) => {
          this.posts = data;
        }
      )
    })
  }
   toArray = function(num : number) {
      for(let i = 1; i <= num ; i++){
        this.pageNumbers[i-1] = i;
      }
  }

  goToPage(page: any) { // without type info
    this.currentPage = page;
    this.getPost();
  }
  prePage(){
    if(this.currentPage > 1 ){
      this.currentPage = this.currentPage - 1
      this.getPost();
    }
  }

  nextPage(){
    if(this.currentPage < this.totalPage ){
      this.currentPage = this.currentPage + 1;
      this.getPost();
    }
  }

}
