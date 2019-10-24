import { SubscriptionService } from './service/subscription.service';
import { PowerBankService } from './service/power-bank.service';
import { NormalStationService } from './service/normal-station.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularOpenlayersModule } from 'ngx-openlayers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigMapComponent } from './big-map/big-map.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListStationComponent } from './station/list-station/list-station.component';
import { ListPowerBankComponent } from './powerBank/list-power-bank/list-power-bank.component';
import { ListSubscriptionComponent } from './subscription/list-subscription/list-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    BigMapComponent,
    ListStationComponent,
    ListPowerBankComponent,
    ListSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NormalStationService, PowerBankService, SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
