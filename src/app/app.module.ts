import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { RoutingModule } from './routing.module';

import { MaterielComponent } from './materiel/materiel.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { MatSlideToggleModule } from '@angular/material';
import { UserLoginComponent } from "./user-login/user-login.component";
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfilComponent } from './profil/profil.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeClientsComponent } from './home-clients/home-clients.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProduitComponent,
    MaterielComponent,
    SocialmediaComponent,
    UserLoginComponent,
    FooterComponent,
    AdminComponent,
    AdminNavbarComponent,
    TasksComponent,
    HomeAdminComponent,
    ProfilComponent,
    ClientsComponent,
    ProjectsComponent,
    HomeClientsComponent
    

   
  ],
  imports: [
  BrowserModule,
  RoutingModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
 
  
  
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
