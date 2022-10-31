import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { CandidatoService } from 'src/app/autenticacao/candidato/candidato.service';
import { ICandidato } from 'src/app/Interfaces/ICandidato';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
})
export class CandidatoComponent implements OnInit {
  candidato!: ICandidato;
  constructor(
    private candidateService: CandidatoService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const user = this.candidateService.retornaUser().subscribe((resposta) =>
      this.httpClient
        .get<ICandidato>(`${API}/candidate/user/${resposta.sub}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .subscribe((ResCandidato) => (this.candidato = ResCandidato))
    );
  }
}
