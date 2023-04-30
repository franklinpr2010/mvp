
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/components/home/home.component";
import { LoginComponent } from "src/app/components/security/login/login.component";
import { AuthGuard } from "./components/security/login/auth.guard";
import { CredorNewComponent } from "./components/credor-new/credor-new.component";
import { CredorListComponent } from "./components/credor-list/credor-list.component";



export const ROUTES: Routes = [
    { path: 'login' , component: LoginComponent },
    { path: '' , component:  HomeComponent, canActivate: [AuthGuard]},
    { path: 'credor-new' , component: CredorNewComponent, canActivate: [AuthGuard] },
    { path: 'credor-list' , component: CredorListComponent, canActivate: [AuthGuard] },
    { path: 'editar/:id/credor-edit', component: CredorNewComponent, canActivate: [AuthGuard] }
  ]
  

  export const routes: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES);



  

