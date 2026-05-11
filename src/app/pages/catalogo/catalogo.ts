import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CarritoService, Producto } from '../../services/carrito';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  constructor(public carritoService: CarritoService) {}

  categoriaActiva = signal('Todos');
  busqueda = signal('');

  productos: Producto[] = [
    { id: 1, nombre: 'Coca-Cola 350ml',    categoria: 'Bebidas',  emoji: '🥤', precio: 1800, disponible: true },
    { id: 2, nombre: 'Papas Margarita',    categoria: 'Snacks',   emoji: '🍟', precio: 1500, disponible: true },
    { id: 3, nombre: 'Agua Cristal 600ml', categoria: 'Agua',     emoji: '💧', precio: 1200, disponible: true },
    { id: 4, nombre: 'Chocolatina Jet',    categoria: 'Dulces',   emoji: '🍬', precio: 800,  disponible: false },
    { id: 5, nombre: 'Postobón 1.5L',      categoria: 'Bebidas',  emoji: '🥤', precio: 2500, disponible: true },
    { id: 6, nombre: 'Chitos 40g',         categoria: 'Snacks',   emoji: '🍿', precio: 1200, disponible: true },
    { id: 7, nombre: 'Hit Mango 250ml',    categoria: 'Bebidas',  emoji: '🧃', precio: 1500, disponible: true },
    { id: 8, nombre: 'Bon Bon Bum',        categoria: 'Dulces',   emoji: '🍫', precio: 500,  disponible: true },
    { id: 9, nombre: 'Pepsi 350ml',        categoria: 'Bebidas',  emoji: '🥤', precio: 1800, disponible: true },
    { id: 10, nombre: 'Maní La Rosa',      categoria: 'Snacks',   emoji: '🥜', precio: 1000, disponible: true },
    { id: 11, nombre: 'Agua Oasis 500ml',  categoria: 'Agua',     emoji: '💧', precio: 1000, disponible: true },
    { id: 12, nombre: 'Chiclets Adams',    categoria: 'Dulces',   emoji: '🍬', precio: 300,  disponible: true },
  ];

  categorias = ['Todos', 'Bebidas', 'Snacks', 'Agua', 'Dulces'];

  productosFiltrados = computed(() => {
    return this.productos.filter(p => {
      const categoriaOk = this.categoriaActiva() === 'Todos' || p.categoria === this.categoriaActiva();
      const busquedaOk = p.nombre.toLowerCase().includes(this.busqueda().toLowerCase());
      return categoriaOk && busquedaOk;
    });
  });

  seleccionarCategoria(cat: string) {
    this.categoriaActiva.set(cat);
  }

  onBusqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    this.busqueda.set(input.value);
  }

  agregar(producto: Producto) {
    if (producto.disponible) {
      this.carritoService.agregar(producto);
    }
  }
}