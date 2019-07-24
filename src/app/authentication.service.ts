import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
