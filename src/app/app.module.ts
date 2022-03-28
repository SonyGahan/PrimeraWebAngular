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
import { HttpClientModule} from '@angular/common/http';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { LoginComponent } from './componentes/login/login.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiesitioComponent,
    EstudiosComponent,
    EstInformaticosComponent,
    ExpLaboralComponent,
    ProyFreelanceComponent,
    CompetenciasComponent,
    AcercadeComponent,
    LoginComponent,
    IniciosesionComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
