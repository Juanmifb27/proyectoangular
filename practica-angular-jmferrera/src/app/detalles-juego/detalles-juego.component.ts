import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ijuego } from '../ijuego';
@Component({
  selector: 'app-detalles-juego',
  standalone: false,
  templateUrl: './detalles-juego.component.html',
  styleUrl: './detalles-juego.component.css'
})
export class DetallesJuegoComponent {
  // En principio debería recibir siempre el juego
  @Input() juego!: Ijuego | null; // Recibe un juego o null
}
