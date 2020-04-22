import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ClientListComponent } from './client/client-list/client-list.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { CompteListComponent } from './compte/compte-list/compte-list.component';
import { CreateCompteComponent } from './compte/create-compte/create-compte.component';
import { UpdateCompteComponent } from './compte/update-compte/update-compte.component';
import { CompteDetailsComponent } from './compte/compte-details/compte-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    ClientListComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ClientDetailsComponent,
    CompteListComponent,
    CreateCompteComponent,
    UpdateCompteComponent,
    CompteDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }