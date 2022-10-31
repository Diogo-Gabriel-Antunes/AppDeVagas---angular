import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { NavbardashboardModule } from '../navbardashboard/navbardashboard.module';
import { CandidatoComponent } from './candidato.component';

@NgModule({
  declarations: [CandidatoComponent],
  imports: [CommonModule, CandidatoRoutingModule, NavbardashboardModule],
  exports: [CandidatoComponent],
})
export class CandidatoModule {}
