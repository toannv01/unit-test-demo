import { LoginComponent } from './login.component';
import { AuthUserService } from '../authentication.service';

// fake classes

// class MockAuthService {
//   authenticated = false;
//   isAuthenticated() {
//     return this.authenticated;
//   }
//  }


// ghi đè functions

// class MockAuthService extends AuthUserService {
//   authenticated = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }
describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: AuthUserService;
  // let service: MockAuthService;

  beforeEach(() => {
    service = new AuthUserService();
    // service = new MockAuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    // localStorage.removeItem('token');
    service = null;
    component = null;
  });


  // it('needsLogin returns false when the user is not authenticated', () => {
  //   expect(component.needsLogin()).toBeTruthy();
  // });

  // it('needsLogin returns false when the user is not authenticated', () => {
  //   localStorage.setItem('token', '12345');
  //   expect(component.needsLogin()).toBeFalsy();
  // });


// // Sử dụng mock

//   it('isLoggedIn returns true when the user is authenticated', () => {
//     localStorage.setItem('token', '12345');
//     service.authenticated = true;
//     expect(component.isLoggedIn()).toBeTruthy();
//   });

//   it('isLoggedIn returns false when the user is not authenticated', () => {
//     service.authenticated = false;
//     expect(component.isLoggedIn()).toBeFalsy();
//   });


  // Sử dụng spy
  it('needsLogin returns false when the user is not authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user is not authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
