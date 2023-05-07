import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
constructor(private productsService :ProductService,public authService:LoginService){}
public numberOfProduct!:number;
public numberOfUsers!:number;
ngOnInit(): void {
  this.numberOfProduct=this.productsService.numberOfProduct();
  this.numberOfUsers=this.authService.numberOfUsers();
}

}
