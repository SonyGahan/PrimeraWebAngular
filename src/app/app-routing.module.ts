import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';

const routes: Routes = [
  {path: 'porfolio',component: PorfolioComponent},
  {path: 'iniciosesion',component: IniciosesionComponent},
  {path: '', redirectTo: 'iniciosesion',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
