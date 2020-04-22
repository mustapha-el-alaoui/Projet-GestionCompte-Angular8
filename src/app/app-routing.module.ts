import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {ClientListComponent} from './client/client-list/client-list.component';
import {CreateClientComponent} from './client/create-client/create-client.component';
import {ClientDetailsComponent} from './client/client-details/client-details.component';
import {UpdateClientComponent} from './client/update-client/update-client.component';
import { CompteListComponent } from './compte/compte-list/compte-list.component';
import {CreateCompteComponent}  from './compte/create-compte/create-compte.component';
import {UpdateCompteComponent} from './compte/update-compte/update-compte.component';
import {CompteDetailsComponent} from './compte/compte-details/compte-details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : 'clients',component:ClientListComponent},
  {path :'add',component:CreateClientComponent},
  {path :'details/:id',component:ClientDetailsComponent},
  {path :'update/:id',component:UpdateClientComponent},
  {path : 'comptes',component:CompteListComponent},
  {path :'addCompte',component:CreateCompteComponent},
  {path :'updateCompte/:numCompte',component:UpdateCompteComponent}, 
  {path :'detailsCompte/:numCompte',component:CompteDetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }