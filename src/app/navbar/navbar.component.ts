import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingModule } from './../routing.module';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

 

}
