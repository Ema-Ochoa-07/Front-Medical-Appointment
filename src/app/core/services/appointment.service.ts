import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAppointments(){
    return this.http.get(`${this.baseUrl}/appointments`)
    //return this.http.get<Appointment[]>(`${this.baseUrl}/appointments`);
  }

}