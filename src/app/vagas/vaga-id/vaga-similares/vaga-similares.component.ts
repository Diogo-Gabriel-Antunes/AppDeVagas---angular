import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IVagas } from 'src/app/Interfaces/IVagas';
import { VagaService } from '../../vaga.service';

@Component({
  selector: 'app-vaga-similares',
  templateUrl: './vaga-similares.component.html',
  styleUrls: ['./vaga-similares.component.css'],
})
export class VagaSimilaresComponent implements OnInit {
  vagasSimilares!: Observable<IVagas[]>;
  vagaId!: number;

  constructor(
    private vagaService: VagaService,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vagaId = this.activetedRoute.snapshot.params['id'];
    this.vagasSimilares = this.vagaService.vagasSimilares(this.vagaId);
  }
}
