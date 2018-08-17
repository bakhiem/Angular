import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostByTypeComponent } from './post-by-type/post-by-type.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { CreatePostComponent } from './create-post/create-post.component';
 import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostsComponent,
    PostDetailComponent,
    PostByTypeComponent,
    CreatePostComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
