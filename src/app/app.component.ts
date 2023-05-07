import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lear';
constructor(private routes:Router){}
  isHomePage(): boolean {
    return this.routes.url === '/';
  }

  isAdminPage(): boolean {
    return this.routes.url.startsWith('/Admin');
  }
}
