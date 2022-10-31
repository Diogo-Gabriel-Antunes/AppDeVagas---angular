import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CandidatoService } from 'src/app/autenticacao/candidato/candidato.service';
import { environment } from 'src/environments/environment.prod';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class LoginCadidatoService {
  constructor(
    private httpClient: HttpClient,
    private candidatoService: CandidatoService
  ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/authenticade`,
        {
          email: email,
          senha: senha,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res: any) => {
          this.candidatoService.salvaToken(res.body?.token);
        })
      );
  }
}
