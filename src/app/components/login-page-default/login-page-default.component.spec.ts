import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageDefaultComponent } from './login-page-default.component';

describe('LoginPageDefaultComponent', () => {
  let component: LoginPageDefaultComponent;
  let fixture: ComponentFixture<LoginPageDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
