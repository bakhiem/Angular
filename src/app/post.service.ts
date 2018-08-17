import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './post-mock';
import {  Observable,of } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})

export class PostService {
  private baseUrl: string = 'http://localhost:6969';
  addPost (post : Post): Observable<Response> {
    console.log(post);
    return this.http
    .post(`${this.baseUrl}/`, undefined, {headers: this.getHeaders(),params:{post:JSON.stringify(post)}});
  }
  constructor(private http : Http) { }
    getAllPost(): Observable<Post[]> {
      return of(POSTS);
    }
    getPost(id: string) : Observable<Response>{
      // let post = this.http
      //   .get(`${this.baseUrl}/${id}`, {headers: this.getHeaders()})
      //   .pipe(map(toPost));
      //   console.log(post);
      //   return post;
      return this.http
       .get(`${this.baseUrl}/${id}`, {headers: this.getHeaders()});
    }
    getPostByType(type: String): Observable<Post[]> {
      return of(POSTS.filter(post => post.type === type));
    }
    getPostByAuth(author: String): Observable<Post[]> {
      return of(POSTS.filter(post => post.createdBy == author));
    }
    getAll(): Observable<Post[]>{
      let posts = this.http
        .get(`${this.baseUrl}`, {headers: this.getHeaders()})
        .pipe(map(mapPosts));
        return posts;
    }
    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
}
function mapPosts(response:Response): Post[]{
  return response.json().map(toPost)
}

function toPost(r:any): Post{
  let post = <Post>({
   id: r._id,
   title: r.title,
   type: r.type,
   content: r.content,
   sortContent: r.sortContent,
   img : r.img,
   createdBy : r.createdBy
 });
 return post;
}
