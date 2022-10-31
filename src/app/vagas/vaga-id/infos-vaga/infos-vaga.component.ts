import { Component, Input, OnInit } from '@angular/core';
import { IVagas } from 'src/app/Interfaces/IVagas';

@Component({
  selector: 'app-infos-vaga',
  templateUrl: './infos-vaga.component.html',
  styleUrls: ['./infos-vaga.component.css'],
})
export class InfosVagaComponent implements OnInit {
  @Input() vaga!: IVagas;
  constructor() {}

  ngOnInit(): void {}
}
