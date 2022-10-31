import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((modulo) => modulo.HomeModule),
  },
  {
    path: 'vagas',
    loadChildren: () =>
      import('./vagas/vagas.module').then((modulo) => modulo.VagasModule),
  },
  {
    path: 'entrar',
    loadChildren: () =>
      import('./entrar/entrar.module').then((modulo) => modulo.EntrarModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/candidato/candidato.module').then(
        (modulo) => modulo.CandidatoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
