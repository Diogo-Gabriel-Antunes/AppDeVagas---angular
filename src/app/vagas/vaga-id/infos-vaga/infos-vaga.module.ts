import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosVagaComponent } from './infos-vaga.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [InfosVagaComponent],
  imports: [CommonModule, MatIconModule],
  exports: [InfosVagaComponent],
})
export class InfosVagaModule {}
