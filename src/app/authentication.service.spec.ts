import { TestBed } from '@angular/core/testing';
import { AuthUserService } from './authentication.service';

describe('AuthUserService', () => {
  let service: AuthUserService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = new AuthUserService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    const service: AuthUserService = TestBed.get(AuthUserService);
    expect(service).toBeTruthy();
  });
  it('should returrn true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should returrn false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
