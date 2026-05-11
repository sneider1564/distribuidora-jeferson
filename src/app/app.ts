import { Component, computed } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CarritoService } from './services/carrito';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public carritoService: CarritoService) {}

  get usuarioActivo() {
    const u = localStorage.getItem('usuarioActivo');
    return u ? JSON.parse(u) : null;
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    window.location.href = '/login';
  }
}