import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent }      from './posts/posts.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { CreatePostComponent }  from './create-post/create-post.component';
import { UserComponent }  from './user/user.component';
import { LogoutComponent }  from './user/logout/logout.component';
import { PostByTypeComponent }  from './post-by-type/post-by-type.component';
import { PostByAuthComponent }  from './post-by-auth/post-by-auth.component';
import { AboutMeComponent }  from './about-me/about-me.component';
import { AuthGuard } from './service/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/allpost', pathMatch: 'full' },
  { path: 'allpost', component: PostsComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'author/:author', component: PostByAuthComponent },
  { path: 'type/:type', component: PostByTypeComponent },
  { path: 'create',canActivate : [AuthGuard], component: CreatePostComponent },
  { path: 'login', component: UserComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'aboutKhiem', component: AboutMeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
