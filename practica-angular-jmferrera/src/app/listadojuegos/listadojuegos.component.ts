import { Component, OnInit } from '@angular/core';
import { RawgService } from '../rawg.service';
import { Ijuego } from '../ijuego';
import { Irawg } from '../irawg';

@Component({
  selector: 'app-listadojuegos',
  standalone: false,
  templateUrl: './listadojuegos.component.html',
  styleUrl: './listadojuegos.component.css'
})
export class ListadojuegosComponent {

  ListaJuego: Ijuego[] = [];
  busqueda: string = "";
  count: number = 0;
  next: string | null = null;
  previous: string | null = null;
  
juegoSeleccionado: Ijuego | null = null; // Para almacenar el juego seleccionado

constructor(private rawgService: RawgService){}

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(url?: string, ordering: string = '') {
    let finalUrl = url ? url : this.rawgService.getBaseUrl(); // Ahora usamos el método público
  
    if (ordering) {
      finalUrl += `&ordering=${ordering}`;
    }
  
    this.rawgService.getJuegos(finalUrl).subscribe({
      next: (result: Irawg) => {
        this.ListaJuego = result.results;
        this.count = result.count;
        this.next = result.next;
        this.previous = result.previous;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  

  buscarJuegos(event?: Event, ordering: string = ''): void {
    if (event) {
      const target = event.target as HTMLInputElement;
      this.busqueda = target.value; // Solo actualiza this.busqueda si viene de un input
    }
  
    if (this.busqueda.trim()) {
      this.rawgService.buscarJuegos(this.busqueda, ordering).subscribe({
        next: (result: Irawg) => {
          this.ListaJuego = result.results;
          this.count = result.count;
          this.next = result.next;
          this.previous = result.previous;
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.getJuegos(undefined, ordering);
    }
  }
  
  

  seleccionarJuego(juego: Ijuego) {
    this.juegoSeleccionado = juego;
  }

  irAPagina(url: string | null) {
    if (url) {
      this.getJuegos(url);
    }
  }
}
