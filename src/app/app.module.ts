import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { HomeService } from './services/home.service';
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
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
