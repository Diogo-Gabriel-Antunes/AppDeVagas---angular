import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/footer/footer.module';
import { VagaIdComponent } from './vaga-id.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { InfosVagaComponent } from './infos-vaga/infos-vaga.component';
import { InfosVagaModule } from './infos-vaga/infos-vaga.module';
import { VagaSimilaresComponent } from './vaga-similares/vaga-similares.component';

@NgModule({
  declarations: [VagaIdComponent, VagaSimilaresComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FooterModule,
    NavbarModule,
    InfosVagaModule,
  ],
  exports: [VagaIdComponent],
})
export class VagaIdModule {}
