import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  emoji: string;
  precio: number;
  disponible: boolean;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items = signal<ItemCarrito[]>([]);

  total = computed(() => this.items().reduce((acc, i) => acc + i.cantidad, 0));
  subtotal = computed(() => this.items().reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0));
  getItems = computed(() => this.items());

  agregar(producto: Producto) {
    const actual = this.items();
    const existe = actual.find(i => i.producto.id === producto.id);
    if (existe) {
      this.items.set(actual.map(i =>
        i.producto.id === producto.id
          ? { ...i, cantidad: i.cantidad + 1 }
          : i
      ));
    } else {
      this.items.set([...actual, { producto, cantidad: 1 }]);
    }
  }

  eliminar(id: number) {
    this.items.set(this.items().filter(i => i.producto.id !== id));
  }

  vaciar() {
    this.items.set([]);
  }
}