import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { LogoutComponent } from './logout/logout.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    LogoutComponent],
    providers: [UserService],
})
export class UserModule { }
