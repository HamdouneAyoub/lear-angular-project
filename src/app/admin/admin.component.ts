import { Component, OnInit, ElementRef, Injectable, NgModule, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
  
})
export class AdminComponent {
 
  
  page="home";
  
  
}
