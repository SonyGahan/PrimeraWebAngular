import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddestudiosComponent } from './componentes/formulario/addestudios/addestudios.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AddexperienciaComponent } from './componentes/formulario/addexperiencia/addexperiencia.component'; 
import { AddhabilidadesComponent } from './componentes/formulario/addhabilidades/addhabilidades.component';
import { AddinformaticosComponent } from './componentes/formulario/addinformaticos/addinformaticos.component';
import { EditarEstudiosComponent } from './componentes/formulario/editar-estudios/editar-estudios.component';
import { EditarExperienciaComponent } from './componentes/formulario/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadesComponent } from './componentes/formulario/editar-habilidades/editar-habilidades.component';
import { EditarInformaticosComponent } from './componentes/formulario/editar-informaticos/editar-informaticos.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';


const routes: Routes = [
  {path: 'porfolio',component: PorfolioComponent},
  {path: 'iniciosesion',component: IniciosesionComponent},
  {path: 'estudios',component: EstudiosComponent},
  {path: 'estudios/addestudios', component: AddestudiosComponent},
  {path: 'exp-laboral/addexperiencia', component: AddexperienciaComponent},
  {path: 'habilidades/addhabilidades', component: AddhabilidadesComponent},
  {path: 'est-informaticos/addinformaticos', component: AddinformaticosComponent},
  {path: 'estudios/editar-estudios/:id', component: EditarEstudiosComponent},
  {path: 'exp-laboral/editar-experiencia/:id', component: EditarExperienciaComponent},
  {path: 'habilidades/editar-habilidades/:id', component: EditarHabilidadesComponent},
  {path: 'est-informaticos/editar-informaticos/:id', component: EditarInformaticosComponent},

  {path: '', redirectTo: 'porfolio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
