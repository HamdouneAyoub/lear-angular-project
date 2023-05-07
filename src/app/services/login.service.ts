import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AppUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users : AppUser[]=[];
  loginedUser : AppUser | undefined;

  constructor() { 
    this.users.push({
      userId: "512001",
      username: 'user1',
      password: 'passuser1',
      roles: ["USER"]
    });
    this.users.push({
      userId: "512002",
      username: 'user2',
      password: 'passuser2',
      roles: ["USER"]
    });
    this.users.push({
      userId: "512003",
      username: 'admin1',
      password: 'passadmin1',
      roles: ["USER","ADMIN"]
    });
    this.users.push({
      userId: "512004",
      username: 'user3',
      password: 'passuser3',
      roles: ["USER"]
    });
    this.users.push({
      userId: "512005",
      username: 'user4',
      password: 'passuser4',
      roles: ["USER"]
    });
    
  }
  public login(username:string,password :string):Observable<AppUser>{

    let appUser =this.users.find(U=> U.username==username)&&this.users.find(U=> U.password==password);
    if(!appUser) return throwError(()=>new Error("User not found"));
    if(appUser.password!=password){
      throwError(()=>new Error("bad User not found"));

    }
    return of(appUser);

  }
  public loginUser(appUser:AppUser):Observable<boolean>{

    this.loginedUser=appUser;
    localStorage.setItem("loginUser",JSON.stringify({username:appUser.username,roles:appUser.roles,jwt:"JWT_TOKEN"}));
  return of(true);
  }
  public hasRole(role : string):boolean{
    return this.loginedUser!.roles.includes(role);
     
  }
  public isLogined(){
    return this.loginedUser!=undefined;
  }
  public logout():Observable<boolean>{
    this.loginedUser=undefined;
    localStorage.removeItem("loginUser");
    return of(true); 
  }
  public getUsers(){
    return this.users;
  }

  public searchUsers(keyword:string):Observable<AppUser[]>{
    let result =this.users.filter(p=>p.username.includes(keyword));
    
    return of(result)
   }
   public numberOfUsers(){
    return this.users.length;
  }
}
