import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/token/token.service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  private usuarioSubject = new BehaviorSubject<any>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const user = token && (jwt_decode(token) as any);
    this.usuarioSubject.next(user);
  }

  retornaUser() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }
  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
