import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoteurRechercheService } from './services/moteur-recherche.service';
import { ListRechercheComponent } from './components/list-recherche/list-recherche.component';


const routes: Routes = [
  { path: 'recherche/:recherche', component: ListRechercheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
