import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent }      from './posts/posts.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { CreatePostComponent }  from './create-post/create-post.component';
import { UserComponent }  from './user/user.component';
import { LogoutComponent }  from './user/logout/logout.component';

import { AuthGuard } from './service/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/allpost', pathMatch: 'full' },
  { path: 'allpost', component: PostsComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'author/:author', component: PostsComponent },
  { path: 'type/:type', component: PostsComponent },
  { path: 'create',canActivate : [AuthGuard], component: CreatePostComponent },
  { path: 'login', component: UserComponent },
  { path: 'logout', component: LogoutComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
