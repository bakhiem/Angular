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
  xxx : Observable<any>;
  posts : Observable<Post[]> ;
  
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
    if(this.route.snapshot.paramMap.get('type') != null ){
      this.postService.getTotalPageType(this.route.snapshot.paramMap.get('type')).subscribe(res => {
        this.totalPage = JSON.parse(res['_body']).totalPage;
        console.log(this.totalPage);
      });
    }
    else if(this.route.snapshot.paramMap.get('author') != null ){
      this.xxx  = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>{
           this.postService.getTotalPageAuth(params.get('author')).subscribe(res => {
            console.log(res)
            //this.totalPage = JSON.parse(res['_body']).totalPage;
            //console.log(this.totalPage);
          });
          console.log('ahihi');
           return this.postService.getTotalPageAuth(params.get('author'));
            }
         )
      )
      // this.postService.getTotalPageAuth(this.route.snapshot.paramMap.get('author')).subscribe(res => {
      //   this.totalPage = JSON.parse(res['_body']).totalPage;
      //   console.log(this.totalPage);
      // });
    }
    else this.postService.getTotalPage().subscribe(res => {
      console.log(res);
      this.totalPage = JSON.parse(res['_body']).totalPage;
      
    });
    
     
  }
  getPost(): void {
    //isType
    if(this.route.snapshot.paramMap.get('type') != null ){
      this.posts = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>{
            return this.postService.getPostByType(params.get('type'),this.currentPage);
            }
         )
      )
    }
    //by author
   else if(this.route.snapshot.paramMap.get('author') != null ){
      this.posts = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>{
            return this.postService.getPostByAuth(params.get('author'),this.currentPage);
            }
         )
      )
    }
    else{
      this.posts = this.postService.getAll(this.currentPage);
    }
    
    
    
  }
}
