import {TestBed, ComponentFixture} from '@angular/core/testing';
import { LoginComponent } from './login/login.component';
import { AuthUserService } from './authentication.service';

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthUserService;
  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [AuthUserService]
    });
    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // UserService provided to the TestBed
    authService = TestBed.get(AuthUserService);
});

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
