import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProduitService } from './services/produit.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuickcomponentComponent } from './components/quickcomponent/quickcomponent.component';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { SanteComponent } from './components/sante/sante.component';



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent, 
    FooterComponent,
    FicheProduitComponent,
    QuickcomponentComponent,
    SanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
