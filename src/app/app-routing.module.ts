import { ListSubscriptionComponent } from './subscription/list-subscription/list-subscription.component';
import { ListPowerBankComponent } from './powerBank/list-power-bank/list-power-bank.component';
import { ListStationComponent } from './station/list-station/list-station.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'station', component: ListStationComponent },
  { path: 'powerBank', component: ListPowerBankComponent },
  { path: 'subscription', component: ListSubscriptionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
