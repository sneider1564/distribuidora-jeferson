import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { Carrito } from './pages/carrito/carrito';
import { Perfil } from './pages/perfil/perfil';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalogo', component: Catalogo },
  { path: 'carrito', component: Carrito },
  { path: 'perfil', component: Perfil },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }
];