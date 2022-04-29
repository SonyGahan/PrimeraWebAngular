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
import { LoginComponent } from './componentes/login/login.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddexperienciaComponent } from './componentes/formulario/addexperiencia/addexperiencia.component';
import { AddestudiosComponent } from './componentes/formulario/addestudios/addestudios.component';
import { AddinformaticosComponent } from './componentes/formulario/addinformaticos/addinformaticos.component';
import { AddhabilidadesComponent } from './componentes/formulario/addhabilidades/addhabilidades.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


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
    LoginComponent,
    IniciosesionComponent,
    PorfolioComponent,
    AddexperienciaComponent,
    AddestudiosComponent,
    AddinformaticosComponent,
    AddhabilidadesComponent,
    HabilidadesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
