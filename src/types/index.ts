export interface UserBase{
    name: string;
    email:string
}
export enum MessageStatus {
    Success = "success",
    Error = "error",
}
export interface Dog {
    id: string
    img: string
    name: string
    age: number
    zip_code: string
    breed: string
}
export interface Location {
    zip_code: string
    latitude: number
    longitude: number 
    city: string
    state: string
    county: string
}