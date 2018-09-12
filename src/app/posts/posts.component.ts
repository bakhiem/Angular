import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../service/post.service';
  
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  perPage : number = 5;//config in this and mongodb :)
  currentPage : number = 1;
  totalPage : number ;
  posts : Observable<Post[]> ;
  pageNumbers : number[] = [];
  
  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.getTotalPage();
    this.getPost();
  }
  getTotalPage() : void{
    this.postService.getTotalPage().subscribe(
      (data : any) => {
        let pages = (JSON.parse(data['_body']).totalPage)
        this.totalPage = Math.ceil(pages / this.perPage) ;
        this.toArray(this.totalPage);
      }
    )
  }
  getPost(): void {
      this.posts = this.postService.getAll(this.currentPage);  
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
