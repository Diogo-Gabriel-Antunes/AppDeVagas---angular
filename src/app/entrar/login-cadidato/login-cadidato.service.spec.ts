import { TestBed } from '@angular/core/testing';

import { LoginCadidatoService } from './login-cadidato.service';

describe('LoginCadidatoService', () => {
  let service: LoginCadidatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCadidatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
