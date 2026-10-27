import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [ FormsModule ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent {
  
  username: string = ''
  clave: string = ''
  
  constructor( 
    private auth: Auth,
    private route: ActivatedRoute,
    private router: Router
   ){}

  
  iniciarSesion(): void{

    this.auth.login(this.username, this.clave).subscribe({
      next:(respuesta) =>{        
        console.log('Inicio de sesión exitoso:', respuesta)
        
        //Atrapa la URL actual para loggear desde ahí o si es solo login redirigir a home
        const returnUrl = this.route.snapshot.queryParams['returnUrlAuth'] || '/home'
        this.router.navigateByUrl(returnUrl)

      },
      error: (error) =>{
        console.log('Error al iniiciar sesión:', error)
      }
    })
  }
}
