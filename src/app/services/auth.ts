import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/loginResponse';

@Injectable({
    providedIn:'root'
})

export class Auth {

    private baseUrl = environment.apiUrl;
    constructor(
        private http: HttpClient
    ) {}

    login(username: string, clave: string){
        return this.http.post<LoginResponse>(`${this.baseUrl}/users/login`,{username, clave})
    }
}
