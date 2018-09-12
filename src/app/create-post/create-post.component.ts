import { Component, OnInit } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {FormControl, FormGroup, FormBuilder,FormsModule  } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Post }  from '../post';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  
  post = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    sortContent: new FormControl(''),
    image: new FormControl(''),
    type: new FormControl(''),
  });
  types = [{type : 'life', value : 'Chuyện đời sống'},
          {type : 'work', value : 'Chuyện đi làm'},
          {type : 'book', value : 'Review sách'}
]
  message = {type : "",msg : null};

  constructor(private postService: PostService,
    private router : Router,
    private fb: FormBuilder
  ) { }
  ngOnInit() {  
   }
  onSubmit(){
    this.postService
    .addPost(toPost(this.post.value))
    .subscribe(
      (res) => {
        this.message.type = "success";
        this.message.msg = "Lưu thành công";
        let r = JSON.parse(res['_body'])
        let id = r.id
        setTimeout(() => { this.router.navigate(['/detail',id])  }, 1000);
        
      },
      err => {
        console.log(err);
        this.message.type = "error";
        this.message.msg = "Lỗi khi lưu bài viết";
      }
    );
  }
}
function toPost(r:any): Post{
  let post = <Post>({
   title: r.title,
   content: r.content,
   type: r.type,
   sortContent: r.sortContent,
   img : (r.image.length > 0) ? r.image : "https://picsum.photos/380/285/?random",
 });
 return post;
}
