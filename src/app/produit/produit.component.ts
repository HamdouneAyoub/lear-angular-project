import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
products! : Array<product>;
currentPage:number=0;
pageSize:number=4;
totalPages:number=0;
  errorMessage: any;
  currentAction:string="all";

  searchFormGroup! : FormGroup;
  constructor(private productsService :ProductService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control(null),

    })
this.handleGetPageProduct();
   
  }
  handleGetPageProduct(){
    this.productsService.getpageProducts(this.currentPage,this.pageSize).subscribe({
      next:(Data)=>{
        this.products=Data.products;
        this.totalPages=Data.totalPages
      },
      error:(err)=>{
        this.errorMessage=err;
      }
      
    });
  }
  handleGetAllProduct(){
    this.productsService.getAllProducts().subscribe({
      next:(Data)=>{
        this.products=Data;
      },
      error:(err)=>{
        this.errorMessage=err;
      }
      
    });

  }
  handleSearchProducts(){
    this.currentAction="search";
    let keyword=this.searchFormGroup.value.keyword;
    this.productsService.searchProducts(keyword,this.currentPage,this.pageSize).subscribe({
      next:(data)=>{
        this.products=data.products;
        this.totalPages=data.totalPages
      }
    })
  }
  handleDeleteProduct(prod:any){
    let conf=confirm("are you sure");
    if(!conf)return;
    this.productsService.deleteProduct(prod.id).subscribe({
      next:(Data)=>{
        let index=this.products.indexOf(prod);
    this.products.splice(index,1);
      }
    });
  }
  public goPage(i:number){
    this.currentPage=i;
    if(this.currentAction=='all'){
      this.handleGetPageProduct();
    }else{
      this.handleSearchProducts();
    }
    
  }
}
