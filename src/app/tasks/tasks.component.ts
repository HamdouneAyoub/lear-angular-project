import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { product } from '../model/product.model';
import { AppUser } from '../model/user.model';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  products! : Array<product>;
  users : AppUser[]=[];
  currentPage:number=0;
  pageSize:number=2;
  totalPages:number=0;
    errorMessage: any;
  
    searchFormGroup! : FormGroup;
    constructor(private productsService :ProductService,private fb:FormBuilder,public loginService:LoginService) { }
  
    ngOnInit(): void {
      this.searchFormGroup=this.fb.group({
        keyword : this.fb.control(null),
  
      })
  this.handleGetPageUsers();
     
    }
    handleGetPageUsers(){
      this.users=this.loginService.getUsers();

   
    }
  
    handleSearchUsers(){
      this.users=this.loginService.getUsers();
      
      let keyword=this.searchFormGroup.value.keyword;
      this.loginService.searchUsers(keyword).subscribe({
        next:(data)=>{
          this.users=data;
        }
      })
    }
   
    
}
