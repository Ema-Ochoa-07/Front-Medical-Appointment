import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
    { path: 'appointments', component: AppointmentComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent }
];
