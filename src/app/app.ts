import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentService } from './core/services/appointment.service';
import { error } from 'console';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [RouterOutlet, JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FrontAppointment');
  citas: any
  
  constructor( private appointmentService: AppointmentService){
    this.appointmentService.getAppointments().subscribe({
      next: (appointments) =>{
        console.log(appointments)
        this.citas = appointments
      },
      error: (error) =>{
        console.error(error)
      }
    })
  }
}
