import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddestudiosComponent } from './componentes/formulario/addestudios/addestudios.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AddexperienciaComponent } from './componentes/formulario/addexperiencia/addexperiencia.component'; 

const routes: Routes = [
  {path: 'porfolio',component: PorfolioComponent},
  {path: 'iniciosesion',component: IniciosesionComponent},
  {path: 'estudios/addestudios', component: AddestudiosComponent},
  {path: 'exp-laboral/addexperiencia', component: AddexperienciaComponent},
  {path: 'competencias/addestudios', component: AddestudiosComponent},
  {path: '', redirectTo: 'porfolio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
