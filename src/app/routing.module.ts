import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ClientsComponent } from "./clients/clients.component";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { HomeClientsComponent } from "./home-clients/home-clients.component";

import { HomeComponent } from "./home/home.component";
import { MaterielComponent } from "./materiel/materiel.component";
import { ProduitComponent } from "./produit/produit.component";
import { ProfilComponent } from "./profil/profil.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserLoginComponent } from "./user-login/user-login.component";


const routes: Routes=[
    {
        path:"",
        component: HomeComponent
      },
      
      {
        path:"Materiel",
        component:MaterielComponent
      },{
        path:"Home-Clients",
        component: HomeClientsComponent
      },
      
      {
        path:"Login",
        component:UserLoginComponent
      },
      {
        path:"Admin",
        component:AdminComponent,
        canActivate:[
          AuthenticationGuard
        ],
        children:[
          {
            path:"",
            component: HomeAdminComponent
          },{
            path:"Tasks",
            component: TasksComponent
          },{
            path:"Produit",
            component: ProduitComponent
          },{
            path:"Clients",
            component: ClientsComponent
          },{
            path:"Projects",
            component: ProjectsComponent
          },{
            path:"Profil",
            component: ProfilComponent
          }
        ]
        
      },
];
@NgModule({
 
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{
    
}