import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCadidatoComponent } from './login-cadidato.component';

describe('LoginCadidatoComponent', () => {
  let component: LoginCadidatoComponent;
  let fixture: ComponentFixture<LoginCadidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCadidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCadidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
