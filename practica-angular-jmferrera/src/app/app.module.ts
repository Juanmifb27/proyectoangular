import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadojuegosComponent } from './listadojuegos/listadojuegos.component';
import { DetallesJuegoComponent } from './detalles-juego/detalles-juego.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Pagina404Component } from './pagina404/pagina404.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadojuegosComponent,
    DetallesJuegoComponent,
    HomeComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
