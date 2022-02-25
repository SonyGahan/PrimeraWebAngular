import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PiesitioComponent } from './componentes/piesitio/piesitio.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { EstInformaticosComponent } from './componentes/est-informaticos/est-informaticos.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { ProyFreelanceComponent } from './componentes/proy-freelance/proy-freelance.component';
import { CompetenciasComponent } from './componentes/competencias/competencias.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiesitioComponent,
    EstudiosComponent,
    EstInformaticosComponent,
    ExpLaboralComponent,
    ProyFreelanceComponent,
    CompetenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
