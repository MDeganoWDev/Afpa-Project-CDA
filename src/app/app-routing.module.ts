import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanteComponent } from './components/sante/sante.component';


const routes: Routes = [
  { path: 'produit/:id', component: SanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
