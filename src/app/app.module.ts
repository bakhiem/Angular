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
import{PostService } from './post.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TabsModule } from 'ngx-bootstrap';
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
    EditorModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
  ],

  providers: [PostService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
