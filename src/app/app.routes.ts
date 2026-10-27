import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { HomeComponent } from './components/home/home';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[authGuard] },
    { path: 'appointments', component: AppointmentComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
