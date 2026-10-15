import { Routes } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment';
import { LoginComponent } from './components/login/login';


export const routes: Routes = [
    { path: 'appointments', component: AppointmentComponent },
    { path: 'login', component: LoginComponent }
];
