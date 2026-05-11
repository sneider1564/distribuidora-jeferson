import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {}

  tab = signal<'login' | 'registro'>('login');
  mostrarPassword = signal(false);
  error = signal('');

  loginData = { correo: '', password: '' };
  registroData = { nombre: '', correo: '', password: '' };

  cambiarTab(t: 'login' | 'registro') {
    this.tab.set(t);
    this.error.set('');
  }

  togglePassword() {
    this.mostrarPassword.set(!this.mostrarPassword());
  }

  iniciarSesion() {
    if (!this.loginData.correo || !this.loginData.password) {
      this.error.set('Por favor completa todos los campos.');
      return;
    }
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) =>
      u.correo === this.loginData.correo && u.password === this.loginData.password
    );
    if (!usuario) {
      this.error.set('Correo o contraseña incorrectos.');
      return;
    }
    localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    this.router.navigate(['/perfil']);
  }

  crearCuenta() {
    if (!this.registroData.nombre || !this.registroData.correo || !this.registroData.password) {
      this.error.set('Por favor completa todos los campos.');
      return;
    }
    if (this.registroData.password.length < 8) {
      this.error.set('La contraseña debe tener mínimo 8 caracteres.');
      return;
    }
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const existe = usuarios.find((u: any) => u.correo === this.registroData.correo);
    if (existe) {
      this.error.set('Ya existe una cuenta con ese correo.');
      return;
    }
    usuarios.push(this.registroData);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioActivo', JSON.stringify(this.registroData));
    this.router.navigate(['/perfil']);
  }

  olvidoPassword() {
    this.error.set('Revisa tu correo para restablecer tu contraseña.');
  }
}