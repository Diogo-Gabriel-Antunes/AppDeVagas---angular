import { Component, Input, OnInit } from '@angular/core';
import { ICandidato } from 'src/app/Interfaces/ICandidato';

@Component({
  selector: 'app-navbardashboard',
  templateUrl: './navbardashboard.component.html',
  styleUrls: ['./navbardashboard.component.css'],
})
export class NavbardashboardComponent implements OnInit {
  @Input() candidato!: ICandidato;
  constructor() {}

  ngOnInit(): void {}
}
