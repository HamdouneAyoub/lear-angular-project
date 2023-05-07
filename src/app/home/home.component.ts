import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const observer =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden")

  hiddenElements.forEach((el)=>observer.observe(el));

//------------------------------------------------------------------------
const observer1 =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('toUp');
    }else{
      entry.target.classList.remove('toUp');
    }
  });
});
const hiddenElements1 = document.querySelectorAll(".down")

hiddenElements1.forEach((el)=>observer1.observe(el));
  
  }
  
  

    

}
