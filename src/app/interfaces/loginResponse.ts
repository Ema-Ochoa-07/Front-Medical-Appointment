export interface  LoginResponse {
    token: string
    user:{
        id: number
        nombre: string
        email: string
        rol: string
    }
}