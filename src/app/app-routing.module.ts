import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent }      from './posts/posts.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { PostByTypeComponent }  from './post-by-type/post-by-type.component';
import { CreatePostComponent }  from './create-post/create-post.component';
const routes: Routes = [
  { path: '', redirectTo: '/allpost', pathMatch: 'full' },
  { path: 'allpost', component: PostsComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'author/:author', component: PostByTypeComponent },
  { path: 'type/:type', component: PostByTypeComponent },
  { path: 'create', component: CreatePostComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
