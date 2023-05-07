import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, Routes } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

   userFormGroup!: FormGroup;
   errorMessage:any;
   

//---------------------------------------------------------------------------------------------------------------
  /*signUpUsers:any[]=[
    {
      userName:'ayoub',
    password:'ayoub'
    }
  ]
  loginObj:any={
    userName:'',
    password:''
  };*/
  constructor(private fb:FormBuilder,
              private loginService:LoginService,private routes:Router) { }

  ngOnInit(): void {
 
    this.userFormGroup=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control("")


    });



//---------------------------------------------------------------------------------------------------------------
    /*localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));

    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signUpUsers=JSON.parse(localData);
    }*/
  }
  handleLogin(){
    let username=this.userFormGroup.value.username;
    let password=this.userFormGroup.value.password;
    this.loginService.login(username,password).subscribe({
      next:(appUser)=>{
        this.loginService.loginUser(appUser).subscribe({
        next:(data)=>{
          this.routes.navigateByUrl('/Admin')

        }
      });},
      error:(err)=>{
        this.errorMessage=err;
      },
    });
  }



//---------------------------------------------------------------------------------------------------------------
  /*
  onLogin(){
  const isUserExist = this.signUpUsers.find(m=>m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  if(isUserExist !=undefined){
    alert('user login successfully');
  }  else{
    alert('wrong credentials');
  }
}*/

}
