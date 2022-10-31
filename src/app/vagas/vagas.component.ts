import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IVagas } from '../Interfaces/IVagas';
import { VagaService } from './vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit {
  listaVagas: IVagas[];

  constructor(private service: VagaService) {
    this.listaVagas = [];
  }

  ngOnInit(): void {
    this.service.listVagas().subscribe((vagas) => {
      this.listaVagas = vagas;
    });
  }
}
