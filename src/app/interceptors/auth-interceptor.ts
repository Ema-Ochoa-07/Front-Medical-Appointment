import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const auth = inject(Auth)
  const token = auth.obtenerToken()
  
  if(token){

    const nuevaPeticion = req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    return next(nuevaPeticion)
  }  

  return next(req);
};
