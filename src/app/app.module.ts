import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheProduitComponent,
    PageAcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
