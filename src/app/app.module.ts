import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';

import { FormulariodebuscaModule } from './vagas/formulariodebusca/formulariodebusca.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { EntrarModule } from './entrar/entrar.module';
import { NavbardashboardModule } from './dashboard/navbardashboard/navbardashboard.module';
import { CandidatoModule } from './dashboard/candidato/candidato.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FormulariodebuscaModule,
    HttpClientModule,
    FooterModule,
    EntrarModule,
    NavbardashboardModule,
    CandidatoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
