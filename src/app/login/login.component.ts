import { Component } from '@angular/core';
import { AuthUserService } from '../authentication.service';

@Component({
 selector: 'app-login',
 template: `
  <a>
    <span *ngIf="needsLogin()">Login</span>
    <span *ngIf="!needsLogin()">Logout</span>
  </a>
 `
})
export class LoginComponent {

 constructor(private authService: AuthUserService) {
 }

//  isLoggedIn() {
//    return this.authService.isAuthenticated();
//  }
 needsLogin() {
  return !this.authService.isAuthenticated();
 }
}
