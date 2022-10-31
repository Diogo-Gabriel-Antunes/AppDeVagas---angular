import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EntrarRoutingModule } from './entrar-routing.module';
import { EntrarComponent } from './entrar.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { LoginCadidatoComponent } from './login-cadidato/login-cadidato.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EntrarComponent, LoginCadidatoComponent],
  imports: [
    CommonModule,
    EntrarRoutingModule,
    NavbarModule,
    FooterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  ],
  exports: [EntrarComponent],
})
export class EntrarModule {}
