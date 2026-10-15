import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../interfaces/appointment.interface';
import { error } from 'node:console';

@Component({
  imports: [],
  selector: 'app-appointment',
  styleUrl: './appointment.css',
  templateUrl: './appointment.html',
})
export class AppointmentComponent {
  
  //  GET APPOINTMENT
  citas: Appointment[] = []

  //SELECCIONAR ARCHIVO
  archivoSeleccionado: File | null = null

  //PROCESAR ARCHIVO
  procesandoArchivo = false
  resulado_cargue: any

  //MOSTRA/OCULAR INCONSISTENCIAS
  mostrarInconsistencias  = false

  constructor( 
    private changeDetectorRef: ChangeDetectorRef,
    private appointmentService: AppointmentService){
      this.listarCitas()
    }

    
    listarCitas(){
      this.appointmentService.getAppointments().subscribe({
        next:(appoitments) =>{
          
          this.citas = appoitments
          this.changeDetectorRef.markForCheck()
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }

    //REFERENCIA PARA LIMPIAR LUEGO EL INPUT
    @ViewChild('archivoInput') archivoInput!: ElementRef


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
          this.resulado_cargue = cargueCitas

          this.procesandoArchivo = false  
               
          this.archivoInput.nativeElement.value = ''
          this.archivoSeleccionado = null

          this.listarCitas()

          this.changeDetectorRef.markForCheck()

        },
        error:(error) =>{
          console.log('ERROR', error)

          this.procesandoArchivo = false

          this.archivoInput.nativeElement.value = ''
          this.archivoSeleccionado = null

          this.changeDetectorRef.markForCheck()
        }
      })
      }
    }

    verInconsistencias(){
      this.mostrarInconsistencias = !this.mostrarInconsistencias
    }

}