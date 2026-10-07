import { Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class Auth {

    private baseUrl = environment.apiUrl;
    constructor(
        private http: HttpClient
    ) {}

    login(username: string, clave: string){
        return this.http.post(`${this.baseUrl}/users/login`,{username, clave})
    }
}
