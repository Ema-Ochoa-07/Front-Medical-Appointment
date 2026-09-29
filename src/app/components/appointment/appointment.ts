import { ChangeDetectorRef, Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../interfaces/appointment.interface';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-appointment',
  styleUrl: './appointment.css',
  templateUrl: './appointment.html',
})
export class AppointmentComponent {
  
  citas: Appointment[] = []

  constructor( 
    private changeDetectorRef: ChangeDetectorRef,
    private appointmentService: AppointmentService){
      
      this.appointmentService.getAppointments().subscribe({
        next: (appointments) =>{
          console.log(appointments)
          this.citas = appointments
          this.changeDetectorRef.markForCheck();
        },
        error: (error) =>{
          console.error(error)
        }
      })
    }
}