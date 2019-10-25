import { AuthGuardService } from './service/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BigMapComponent } from './big-map/big-map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'monCompte', component: MyAccountComponent, canActivate: [AuthGuardService] },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
