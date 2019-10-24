import { CreateAccountComponent } from './create-account/create-account.component';
import { BigMapComponent } from './big-map/big-map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { logging } from 'protractor';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'home', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
