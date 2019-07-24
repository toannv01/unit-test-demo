import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {
    name: 'Toan'
  };

  constructor() { }

  getData() {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise(( resolve, reject) => {
      setTimeout(() => {
        resolve('Data 100');
      }, 500);
    });
  }

}
