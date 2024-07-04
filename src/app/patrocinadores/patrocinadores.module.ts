import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioPatrocinadorComponent } from './formulario-patrocinador/formulario-patrocinador.component';
import { LayoutPatrocinadorComponent } from './layout-patrocinador/layout-patrocinador.component';



@NgModule({
  declarations: [
    FormularioPatrocinadorComponent,
    LayoutPatrocinadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatrocinadoresModule { }
