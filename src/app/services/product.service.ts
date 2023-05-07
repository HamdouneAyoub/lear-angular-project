import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageProduct, product } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products! : Array<product>;

  constructor() {this.products=[
    {id:1, name:"HP Computer",price:7000 ,existe:true},
    {id:2, name:"Keyboard DELL",price:8000.5,existe:false },
    {id:3, name:"Mouse DELL",price:9000,existe:false },
    {id:4, name:"LENOVO Computer",price:9000,existe:true },
    {id:5, name:"DELL Computer",price:9000,existe:true },
    {id:6, name:"Mouse Fujitsu",price:9000,existe:false },
    {id:7, name:"ASUS Computer",price:9000,existe:true },
    {id:8, name:"Keyboard Fujitsu",price:9000,existe:true },
    {id:9, name:"Toshiba Computer",price:9000,existe:true },
    {id:10, name:"Hard Disk Fujitsu",price:9000,existe:false },
    {id:11, name:"APPLE Computer",price:9000,existe:true },
    {id:12, name:"Hard Disk LENOVO",price:5500,existe:false},
    {id:13, name:"DELL Computer",price:9000,existe:true },
    {id:14, name:"Mouse Fujitsu",price:9000,existe:false },
    {id:15, name:"ASUS Computer",price:9000,existe:true },
    {id:16, name:"Keyboard Fujitsu",price:9000,existe:true },
  ];
}
public numberOfProduct(){
  return this.products.length;
}
 public getAllProducts():Observable<product[]>{
  return of([...this.products]);
 }
 public getpageProducts(page:number,size:number):Observable<PageProduct>{
  let index=page*size;
  let totalPages=~~this.products.length/size;
  if((this.products.length%size)!=0){
    totalPages++;
  }
  let pageProducts =this.products.slice(index,index+size);
  return of({page:page,size:size,products:pageProducts,totalPages:totalPages})
 }
 public deleteProduct(id:number):Observable<boolean>{
   let products =this.products.filter(p=>p.id!=id);
return of(true)
 }
 public searchProducts(keyword:string,page:number,size:number):Observable<PageProduct>{
  let result =this.products.filter(p=>p.name.includes(keyword));
  let index=page*size;
  let totalPages=~~result.length/size;
  if((this.products.length%size)!=0){
    totalPages++;
  }
  let pageProducts =result.slice(index,index+size);
  return of({page:page,size:size,products:pageProducts,totalPages:totalPages})
 }
 }
  

