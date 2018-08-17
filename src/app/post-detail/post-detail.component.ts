import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post }  from '../post';
import { PostService }  from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post : Post;
  
  constructor(
    private route: ActivatedRoute,
    private postService : PostService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPost();
  }
  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(
        (data : any) => {
          this.post = JSON.parse(data['_body']);
        }
      )
  }
}
