import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './inicio/bienvenido/bienvenido.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { ProyectosComponent } from './inicio/proyectos/proyectos.component';
import { SobreNosotrosComponent } from './inicio/sobre-nosotros/sobre-nosotros.component';


const routes: Routes = [
  {
      path: 'bienvenido',
      component: BienvenidoComponent,
  },
  {
      path: 'contacto',
      component: ContactoComponent,
  },
  {
      path: 'sobreNosotros',
      component: SobreNosotrosComponent,
  },
  {
      path: 'proyectos',
      component: ProyectosComponent,
  },
  {
    path: '**',
    redirectTo: 'bienvenido',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
