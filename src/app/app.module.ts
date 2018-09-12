import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { CreatePostComponent } from './create-post/create-post.component';
 import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import{PostService } from './service/post.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TabsModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthGuard } from './service/guard/auth.guard';
import { PostByTypeComponent } from './post-by-type/post-by-type.component';
import { PostByAuthComponent } from './post-by-auth/post-by-auth.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserComponent } from './user/user.component';

import { NgxEditorModule } from 'ngx-editor';
import { MaxLength } from './pipe/max-leng.pipe';
import { HttpClientModule } from '@angular/common/http'; 
import{LogoutComponent} from './user/logout/logout.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostsComponent,
    PostDetailComponent,
    CreatePostComponent,
    PostByTypeComponent,
    PostByAuthComponent,
    AboutMeComponent,
    NavbarComponent,
    MaxLength,
    UserComponent,
    LogoutComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxEditorModule,
    AngularFontAwesomeModule,
    EditorModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    
  ],

  providers: [PostService,
    AuthGuard
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
