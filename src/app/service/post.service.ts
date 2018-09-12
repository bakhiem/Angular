import { Injectable } from '@angular/core';
import { Post } from '../post';
import {  Observable,of } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as dateFormat from 'dateformat';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  withCredentials: true,
};
@Injectable({
  providedIn: 'root'
})

export class PostService {
  private baseUrl: string = 'http://localhost:6969';
  addPost (post : Post): Observable<Response> {
    return this.http
    .post(`${this.baseUrl}/`, undefined, {headers: this.getHeaders(), withCredentials: true,params:{post:JSON.stringify(post)}});
  }
  constructor(private http : Http) { }

    getPost(id: string) : Observable<Response>{
      let options = new RequestOptions({ headers: this.getHeaders() });
      return this.http
       .get(`${this.baseUrl}/${id}`,options);
    }
    getTotalPageType(type : string) : Observable<Response>{
      return this.http
       .get(`${this.baseUrl}/countType/${type}`,{headers: this.getHeaders()});
    }

    getTotalPageAuth(auth : string) : Observable<Response>{
      return this.http
       .get(`${this.baseUrl}/countAuth/${auth}`,{headers: this.getHeaders()});
    }

    getTotalPage() : Observable<Response>{
      return this.http
       .get(`${this.baseUrl}/count`,{headers: this.getHeaders()});
    }

    getPostByType(type: String,page : number): Observable<Post[]> {
      let posts = this.http
        .get(`${this.baseUrl}/type/${type}/${page}`, {headers: this.getHeaders()})
        .pipe(map(mapPosts));
        return posts;
    }
    getPostByAuth(author: String,page : number): Observable<Post[]> {
      let posts = this.http
      .get(`${this.baseUrl}/author/${author}/${page}`, {headers: this.getHeaders()})
      .pipe(map(mapPosts));
      return posts;
    }
    getAll(page : number): Observable<Post[]>{
      let posts = this.http
        .get(`${this.baseUrl}/posts/${page}`, {headers: this.getHeaders()})
        .pipe(map(mapPosts));
        return posts;
    }

    getPostHighLight(): Observable<Post[]>{
      let posts = this.http
        .get(`${this.baseUrl}/highlight`, {headers: this.getHeaders()})
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
  
  let dateFormat = require('dateformat');
  let post = <Post>({
   id: r._id,
   title: r.title,
    type: r.type,
    content: r.content,
   sortContent: r.sortContent,
   img : r.img,
   createdBy : r.createdBy,
   createdAt : dateFormat(r.createdAt, "dd-mm-yyyy"),
   view : r.view
 });
 return post;
}
