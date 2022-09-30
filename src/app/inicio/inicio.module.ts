import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';



@NgModule({
  declarations: [
    SobreNosotrosComponent,
    ContactoComponent,
    ProyectosComponent,
    BienvenidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BienvenidoComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    ProyectosComponent,
    BienvenidoComponent
  ]
})
export class InicioModule { }
