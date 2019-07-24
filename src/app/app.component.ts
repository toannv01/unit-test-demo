import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unitest-demo';

  name = 'Name';
  a: string;
  isLoggedIn = false;
  user;
  data;

  constructor(private userService: UserService) {

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.user = this.userService.user;
    console.log(this.user);
    this.userService.getData().then(() => {
      this.data = this.data;
    });
  }
  // x: number;
  // isolated
  tinhTong(a: number, b: number): number {
    return a + b ;
  }

  setBienA() {
    this.a = 'Toan';
  }
  getArray() {
    return [1, 2];
  }
}
