import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitService } from './services/produit.service';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { QuickcomponentComponent } from './components/quickcomponent/quickcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FicheProduitComponent,
    QuickcomponentComponent, 
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
