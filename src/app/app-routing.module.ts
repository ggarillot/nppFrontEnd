<<<<<<< HEAD
import { StationDetailsComponent } from './station/station-details/station-details.component';
import { ListPowerBankByStationComponent } from './station/list-power-bank-by-station/list-power-bank-by-station.component';

=======
>>>>>>> master
import { ListSubscriptionComponent } from './subscription/list-subscription/list-subscription.component';
import { ListPowerBankComponent } from './powerBank/list-power-bank/list-power-bank.component';
import { ListStationComponent } from './station/list-station/list-station.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { logging } from 'protractor';
>>>>>>> master
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
<<<<<<< HEAD

  { path: 'station', component: ListStationComponent },
  { path: 'powerBank', component: ListPowerBankComponent },
  { path: 'subscription', component: ListSubscriptionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'monCompte', component: MyAccountComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'station/:idStation', component: StationDetailsComponent }

=======
  { path: 'station', component: ListStationComponent },
  { path: 'powerBank', component: ListPowerBankComponent },
  { path: 'subscription', component: ListSubscriptionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'monCompte', component: MyAccountComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'home', component: HomeComponent}
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
