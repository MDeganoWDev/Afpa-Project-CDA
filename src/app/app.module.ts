import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { QuickcomponentComponent } from './components/quickcomponent/quickcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
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
