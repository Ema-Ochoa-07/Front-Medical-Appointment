import { ChangeDetectorRef, Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../interfaces/appointment.interface';
import { JsonPipe } from '@angular/common';
import { error } from 'node:console';

@Component({
  imports: [JsonPipe],
  selector: 'app-appointment',
  styleUrl: './appointment.css',
  templateUrl: './appointment.html',
})
export class AppointmentComponent {
  
  citas: Appointment[] = []
  archivoSeleccionado: File | null = null
  procesandoArchivo = false


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


    seleccionarArchivo(event: Event){
      const input = event.target as HTMLInputElement

      if( input.files && input.files.length > 0 ){
        this.archivoSeleccionado = input.files[0]
        console.log(this.archivoSeleccionado)
      }
    }

    procesarArchivo(){
      //console.log("Procesando archivo.....")

      if(this.archivoSeleccionado){

        this.procesandoArchivo = true

        const formData = new FormData()

        formData.append('file', this.archivoSeleccionado)
        //console.log(formData.get('file'))

      this.appointmentService.procesandoArchivo(formData).subscribe({
        next: (cargueCitas) =>{
          console.log('RESPUESTA',cargueCitas)
        },
        error:(error) =>{
          console.log('ERROR', error)
        }
      })
      }
    }
}