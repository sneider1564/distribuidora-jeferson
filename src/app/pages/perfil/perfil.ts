import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  constructor(public carritoService: CarritoService) {}

  usuario = {
    nombre: 'Carlos Rodríguez',
    negocio: 'Tienda El Progreso · Bogotá',
    correo: 'carlos@tienda.co',
    telefono: '+57 311 234 5678',
    direccion: 'Cra 15 #45-20, Bogotá',
    miembro: 'Enero 2025'
  };

  pedidos = [
    { id: '#00123', fecha: '28 abril 2026', total: 45000, estado: 'Entregado' },
    { id: '#00118', fecha: '21 abril 2026', total: 62500, estado: 'En camino' },
    { id: '#00110', fecha: '14 abril 2026', total: 38000, estado: 'Entregado' },
  ];

  getEstadoClass(estado: string): string {
    if (estado === 'Entregado') return 'estado-entregado';
    if (estado === 'En camino') return 'estado-camino';
    return '';
  }
}