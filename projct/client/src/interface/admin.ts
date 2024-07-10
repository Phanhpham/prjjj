export interface Admin{
    userName: string,
    password: string,
}
export interface Admins {
    email: string,
    password:string,
}

export interface Users{
    id: number
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
}