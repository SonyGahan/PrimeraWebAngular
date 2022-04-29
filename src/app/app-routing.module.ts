import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddestudiosComponent } from './componentes/formulario/addestudios/addestudios.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AddexperienciaComponent } from './componentes/formulario/addexperiencia/addexperiencia.component'; 
import { AddhabilidadesComponent } from './componentes/formulario/addhabilidades/addhabilidades.component';
import { AddinformaticosComponent } from './componentes/formulario/addinformaticos/addinformaticos.component';

const routes: Routes = [
  {path: 'porfolio',component: PorfolioComponent},
  {path: 'iniciosesion',component: IniciosesionComponent},
  {path: 'estudios/addestudios', component: AddestudiosComponent},
  {path: 'exp-laboral/addexperiencia', component: AddexperienciaComponent},
  {path: 'habilidades/addhabilidades', component: AddhabilidadesComponent},
  {path: 'est-informaticos/addinformaticos', component: AddinformaticosComponent},
  {path: '', redirectTo: 'porfolio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
