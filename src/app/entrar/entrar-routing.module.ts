import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar.component';
import { LoginCadidatoComponent } from './login-cadidato/login-cadidato.component';

const routes: Routes = [
  {
    path: '',
    component: EntrarComponent,
  },
  {
    path: 'candidato',
    component: LoginCadidatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrarRoutingModule {}
