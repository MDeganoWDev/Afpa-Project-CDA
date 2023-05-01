import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanteComponent } from './sante/sante.component';
import { HttpClientModule } from '@angular/common/http';
import { SanteService } from './service/sante.service';


@NgModule({
  declarations: [
    AppComponent,SanteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SanteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
