import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './vagas.component';
import { CardVagasComponent } from './card-vagas/card-vagas.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FormulariodebuscaModule } from './formulariodebusca/formulariodebusca.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { VagaIdComponent } from './vaga-id/vaga-id.component';
import { InfosVagaComponent } from './vaga-id/infos-vaga/infos-vaga.component';
import { FooterModule } from '../footer/footer.module';
import { VagaIdModule } from './vaga-id/vaga-id.module';
import { InfosVagaModule } from './vaga-id/infos-vaga/infos-vaga.module';

@NgModule({
  declarations: [VagasComponent, CardVagasComponent],
  imports: [
    CommonModule,
    VagasRoutingModule,
    NavbarModule,
    FormulariodebuscaModule,
    HttpClientModule,
    MatIconModule,
    FooterModule,
    VagaIdModule,
    InfosVagaModule,
  ],
  exports: [VagasComponent],
})
export class VagasModule {}
