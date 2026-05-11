import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {
  constructor(public carritoService: CarritoService) {}
}