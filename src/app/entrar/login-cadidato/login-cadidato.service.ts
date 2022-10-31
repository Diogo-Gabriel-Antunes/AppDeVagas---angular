import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class LoginCadidatoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(email: string, senha: string): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8080/authenticade`,
      {
        email: email,
        senha: senha,
      },
      {
        responseType: 'json',
      }
    );
  }
}
