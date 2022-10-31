import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagaIdComponent } from './vaga-id/vaga-id.component';
import { VagasComponent } from './vagas.component';

const routes: Routes = [
  {
    path: '',
    component: VagasComponent,
  },
  {
    path: ':id',
    component: VagaIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VagasRoutingModule {}
