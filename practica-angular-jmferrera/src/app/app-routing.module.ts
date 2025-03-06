import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadojuegosComponent } from './listadojuegos/listadojuegos.component';
import { DetallesJuegoComponent } from './detalles-juego/detalles-juego.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [  
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'listaJuegos', component:ListadojuegosComponent},
  {path:'detalleJuego', component:DetallesJuegoComponent},
  {path:'**', component:Pagina404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
