import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth)
  const token = auth.obtenerToken()
  const router = inject(Router)

  if(token){
    return true
  }
  //MANTIENE LA URL ACTUAL
  return router.createUrlTree(['/login'],{
    queryParams: { returnUrlAuth: state.url }
  })
};
