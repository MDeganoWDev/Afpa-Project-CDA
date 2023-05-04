import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProduitService } from './services/produit.service';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { QuickcomponentComponent } from './components/quickcomponent/quickcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    FicheProduitComponent,
    QuickcomponentComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
