export interface IAppointment {
    id: number
    especialidad: string
    especialista: string
    estado: string
    fecha_cita: Date
    observacion?: string
    created_at: Date
    updated_at: Date
}