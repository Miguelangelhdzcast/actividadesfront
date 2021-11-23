import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesActividadComponent } from './actividad/detalles-actividad/detalles-actividad.component';
import { EditarActividadComponent } from './actividad/editar-actividad/editar-actividad.component';
import { ListaActividadesComponent } from './actividad/lista-actividades.component';
import { NuevaActividadComponent } from './actividad/nueva-actividad/nueva-actividad.component';

const routes: Routes = [

  {path: '', component: ListaActividadesComponent},
  {path: 'detalles/:id_act', component: DetallesActividadComponent},
  {path: 'nuevo', component:NuevaActividadComponent},
  {path: 'editar/:id_act', component: EditarActividadComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
