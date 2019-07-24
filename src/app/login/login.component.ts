import { Component } from '@angular/core';
import { AuthUserService } from '../authentication.service';

@Component({
 selector: 'app-login',
 template: `<a [hidden]="isLoggedIn()">Login</a><br>
 <a [hidden]="needsLogin()">Login</a>
 `
})
export class LoginComponent {

 constructor(private authService: AuthUserService) {
 }

 isLoggedIn() {
   return this.authService.isAuthenticated();
 }
 needsLogin() {
  return !this.authService.isAuthenticated();
 }
}
