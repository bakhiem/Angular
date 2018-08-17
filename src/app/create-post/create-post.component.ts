import { Component, OnInit } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {FormControl, FormGroup  } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Post }  from '../post';
import { PostService }  from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  
  post = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });
  constructor(private postService: PostService,) { }

  ngOnInit() {
  }
  onSubmit(){
    this.postService
    .addPost(toPost(this.post.value))
    .subscribe(
      (r) => {console.log(r);}
    );
  }
}
function toPost(r:any): Post{
  let post = <Post>({
   id: "abcae",
   title: r.title,
   type: "life",
   content: r.content,
   sortContent: "No content",
   img : "ahihi",
   createdBy : "KhiemNB"
 });
 console.log('Parsed post:', post);
 return post;
}
