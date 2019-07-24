import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

class MockUserService {
  getData() {
    return Promise.resolve('1');
  }
}

describe('AppComponent', () => {
  let fixture;
  let app;
  let compiled;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ }]
      // new UserService => new MockUserService
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;

  });
  afterEach(() => {
    fixture = null;
    app = null;
  });

  // it('should create the app', () => {
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'unitest-demo'`, () => {
  //   expect(app.title).toEqual('unitest-demo');
  // });

  // it(`có biến name giá trị là 'Name'`, () => {
  //   expect(app.name).toEqual('Name');
  // });

  // it(`tra ve [1, 2] `, async(() => {
  //   expect(app.getArray()).toEqual([1, 2]);
  // }));

  // it(`tinh tong chuan `, async(() => {
  //   expect(app.tinhTong(1, 1)).toEqual(2);
  //   expect(app.tinhTong(1, 2)).toEqual(3);
  // }));


  // // it('should render title in a h1 tag', () => {
  // //   fixture.detectChanges();
  // //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to unitest-demo!');
  // // });

  // it('hien thi bien a trong html co gia tri defind la Toan ', () => {
  //   app.setBienA();
  //   fixture.detectChanges();
  //   expect(compiled.querySelector('p.a').textContent).toContain('Toan');
  // });
  // // it('should render hello Toan when loggin', () => {
  // //   app.isLoggedIn = true;
  // //   fixture.detectChanges();
  // //   expect(compiled.querySelector('div h1').textContent).toContain('Toan');
  // // });
  // // it('should render hello Toan when not loggin', () => {
  // //   app.isLoggedIn = false;
  // //   fixture.detectChanges();
  // //   expect(compiled.querySelector('div h1').textContent).toContain('Please Login');
  // // });
  // // it('should getData', async(() => {
  // //   fixture.detectChanges();
  // //   fixture.whenStable().then(() => {
  // //     expect(app.data).toEqual('1');
  // //   });
  // // }));

});
