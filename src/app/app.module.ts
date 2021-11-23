import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaActividadesComponent } from './actividad/lista-actividades.component';
import { NuevaActividadComponent } from './actividad/nueva-actividad/nueva-actividad.component';
import { EditarActividadComponent } from './actividad/editar-actividad/editar-actividad.component';

import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { DetallesActividadComponent } from './actividad/detalles-actividad/detalles-actividad.component'
@NgModule({
  declarations: [
    AppComponent,
    ListaActividadesComponent,
    NuevaActividadComponent,
    EditarActividadComponent,
    DetallesActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
