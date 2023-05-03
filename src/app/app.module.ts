import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SanteService } from './service/sante.service';


import { SanteComponent } from './components/sante/sante.component';



@NgModule({
  declarations: [
    AppComponent,SanteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SanteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
