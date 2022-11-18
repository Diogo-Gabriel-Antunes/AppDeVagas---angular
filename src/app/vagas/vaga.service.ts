import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVagas } from '../Interfaces/IVagas';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private API = environment.apiURL;

  private listaVagas: IVagas[];

  constructor(private http: HttpClient) {
    this.listaVagas = [];
  }

  listVagas(): Observable<IVagas[]> {
    return this.http.get<IVagas[]>(`${this.API}/vacancies`);
  }

  pegaVagaId(id: number): Observable<IVagas> {
    return this.http.get<IVagas>(`${this.API}/vacancies/${id}`);
  }

  vagasSimilares(id: number): Observable<IVagas[]> {
    return this.http.get<IVagas[]>(`${this.API}/vacancies/similar/${id}`);
  }

  listaOportunidades(id: number) {
    return this.http.get<IVagas[]>(`${this.API}/candidate/opportunity/${id}`);
  }
}
