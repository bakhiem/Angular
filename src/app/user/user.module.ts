import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { LogoutComponent } from './logout/logout.component';
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
