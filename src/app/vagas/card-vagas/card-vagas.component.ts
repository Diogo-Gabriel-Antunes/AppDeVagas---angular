import { Component, Input, OnInit } from '@angular/core';
import { IVagas } from 'src/app/Interfaces/IVagas';

@Component({
  selector: 'app-card-vagas',
  templateUrl: './card-vagas.component.html',
  styleUrls: ['./card-vagas.component.css'],
})
export class CardVagasComponent implements OnInit {
  @Input() vagas: IVagas[] = [];
  constructor() {}

  ngOnInit(): void {}
}
