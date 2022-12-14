import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbardashboardComponent } from './navbardashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbardashboardComponent],
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  exports: [NavbardashboardComponent],
})
export class NavbardashboardModule {}
