import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanteComponent } from './components/sante/sante.component';


import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { QuickcomponentComponent } from './components/quickcomponent/quickcomponent.component';

const routes: Routes = [
  { path: '', component: QuickcomponentComponent },
  { path: 'produit/:id', component: FicheProduitComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
