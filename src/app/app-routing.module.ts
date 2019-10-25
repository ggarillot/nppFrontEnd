
import { AuthGuardService } from './service/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { QuiSommesNousComponent } from './infos/qui-sommes-nous/qui-sommes-nous.component';
import { StationDetailsComponent } from './station/station-details/station-details.component';
import { ListPowerBankByStationComponent } from './station/list-power-bank-by-station/list-power-bank-by-station.component';
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

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'monCompte', component: MyAccountComponent, canActivate: [AuthGuardService] },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent }


  { path: 'station', component: ListStationComponent },
  { path: 'powerBank', component: ListPowerBankComponent },
  { path: 'subscription', component: ListSubscriptionComponent },
  { path: 'station/:idStation', component: StationDetailsComponent },
  { path: 'qui', component: QuiSommesNousComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
