import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(public authService:LoginService,private routes:Router){}
  @Output()
  sideNavToggled = new EventEmitter<boolean>();

  menuStatus: boolean = false;
  SideNavToggle(){
    this.menuStatus =!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  title = 'navar';
  sideNavStatus: boolean = false;
  handleLogout(){
    this.authService.logout().subscribe({
      next:(data)=>{
        this.routes.navigateByUrl("")
      }
    })
  }
 
}
