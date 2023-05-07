export interface product{
    id:number;
    name:string;
    price:number;
    existe:boolean;
}
export interface PageProduct{
    products :product[];
    page:number;
    size:number;
    totalPages:number;
}