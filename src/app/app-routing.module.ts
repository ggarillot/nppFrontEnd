
import { ListSubscriptionComponent } from './subscription/list-subscription/list-subscription.component';
import { ListPowerBankComponent } from './powerBank/list-power-bank/list-power-bank.component';
import { ListStationComponent } from './station/list-station/list-station.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'station', component: ListStationComponent },
  { path: 'powerBank', component: ListPowerBankComponent },
  { path: 'subscription', component: ListSubscriptionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'monCompte', component: MyAccountComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
