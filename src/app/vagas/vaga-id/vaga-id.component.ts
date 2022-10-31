import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IVagas } from 'src/app/Interfaces/IVagas';
import { VagaService } from '../vaga.service';

@Component({
  selector: 'app-vaga-id',
  templateUrl: './vaga-id.component.html',
  styleUrls: ['./vaga-id.component.css'],
})
export class VagaIdComponent implements OnInit {
  vagaId!: number;
  vaga$!: Observable<IVagas>;
  inscricao!: Subscription;

  constructor(
    private vagaService: VagaService,
    private activetedRoute: ActivatedRoute
  ) {
    console.log(activetedRoute);
  }

  ngOnInit(): void {
    this.inscricao = this.activetedRoute.params.subscribe((parametros) => {
      this.vagaId = parametros['id'];
      this.vaga$ = this.vagaService.pegaVagaId(this.vagaId);
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
