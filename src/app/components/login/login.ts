import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { error } from 'console';

@Component({
  imports: [ FormsModule ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent {
  
  username: string = ''
  clave: string = ''
  
  constructor( private auth: Auth ){}

  
  iniciarSesion(): void{

    this.auth.login(this.username, this.clave).subscribe({
      next:(respuesta) =>{
        
        console.log('Inicio de sesión exitoso:', respuesta)
        localStorage.setItem('token', respuesta.token)
        localStorage.setItem('user', JSON.stringify(respuesta.user))
      },
      error: (error) =>{
        console.log('Error al iniiciar sesión:', error)
      }
    })
  }
}
