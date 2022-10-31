import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatSlider } from '@angular/material/slider';
import { FormulariodebuscaComponent } from './formulariodebusca.component';

@NgModule({
  declarations: [FormulariodebuscaComponent],
  imports: [CommonModule, MatSliderModule],
  exports: [FormulariodebuscaComponent],
})
export class FormulariodebuscaModule {}
