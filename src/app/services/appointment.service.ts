import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Appointment } from "../interfaces/appointment.interface";


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAppointments(){
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments`)
  }

  procesandoArchivo(formData: FormData){
    return this.http.post(`${this.baseUrl}/appointments/procesar`, formData)
  }

}