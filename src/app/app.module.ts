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
import { EditarEstudiosComponent } from './componentes/formulario/editar-estudios/editar-estudios.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { EditarExperienciaComponent } from './componentes/formulario/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadesComponent } from './componentes/formulario/editar-habilidades/editar-habilidades.component';
import { EditarInformaticosComponent } from './componentes/formulario/editar-informaticos/editar-informaticos.component';
import { EditarPersonalComponent } from './componentes/formulario/editar-personal/editar-personal.component';



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
    HabilidadesComponent,
    EditarEstudiosComponent,
    EditarExperienciaComponent,
    EditarHabilidadesComponent,
    EditarInformaticosComponent,
    EditarPersonalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PorfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
