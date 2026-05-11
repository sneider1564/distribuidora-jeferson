import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  marcas = ['Coca-Cola', 'Postobón', 'Pepsi', 'Quaker'];

  categorias = [
    { emoji: '🥤', nombre: 'Bebidas gaseosas', color: '#FDECEA' },
    { emoji: '🍟', nombre: 'Frituras y snacks', color: '#FFF8E1' },
    { emoji: '💧', nombre: 'Agua e hidratantes', color: '#E8F5E9' },
    { emoji: '🍬', nombre: 'Dulces y confitería', color: '#FCE4EC' },
  ];
}