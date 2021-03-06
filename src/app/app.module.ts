import { GenericUserService } from './service/generic-user.service';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { GenericStationService } from 'src/app/service/generic-station.service';
import { ListPowerBankByStationComponent } from './station/list-power-bank-by-station/list-power-bank-by-station.component';
import { SubscriptionService } from './service/subscription.service';
import { PowerBankService } from './service/power-bank.service';
import { NormalStationService } from './service/normal-station.service';
import { GeoJsonRoutingService } from './service/geo-json-routing.service';
import { StandardUser } from './model/StandardUser';
import { RouterModule } from '@angular/router';
import { StandardUserService } from './service/standard-user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigMapComponent } from './big-map/big-map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StationMarkerComponent } from './station-marker/station-marker.component';

import { ListStationComponent } from './station/list-station/list-station.component';
import { ListPowerBankComponent } from './powerBank/list-power-bank/list-power-bank.component';
import { ListSubscriptionComponent } from './subscription/list-subscription/list-subscription.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel, FormGroup, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {
  MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
  MatMenuModule, MatIconModule, MatCardContent, MatProgressSpinnerModule,
  MatExpansionModule, MatDividerModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSidenav, MatSidenavModule
} from '@angular/material';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LogoutComponent } from './logout/logout.component';
import { StationDetailsComponent } from './station/station-details/station-details.component';
import { QuiSommesNousComponent } from './infos/qui-sommes-nous/qui-sommes-nous.component';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { FormulaireStationComponent } from './station/formulaire-station/formulaire-station.component';
import { InformationComponent } from './my-account/information/information.component';
import { WelcomeAdminComponent } from './admin/welcome-admin/welcome-admin.component';
import { FailComponent } from './fail/fail.component';



@NgModule({
  declarations: [
    AppComponent,
    BigMapComponent,
    StationMarkerComponent,
    ListStationComponent,
    ListPowerBankComponent,
    ListSubscriptionComponent,
    ListPowerBankByStationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,
    MyAccountComponent,
    LogoutComponent,
    StationDetailsComponent,
    QuiSommesNousComponent,
    AdminComponent,
    AddAdminComponent,
    FormulaireStationComponent,
    InformationComponent,
    WelcomeAdminComponent,
    FailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    // MatTableModule,
    // MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSidenavModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true},
     // tslint:disable-next-line:max-line-length
     NormalStationService, PowerBankService, SubscriptionService, StandardUserService, StandardUser, GenericUserService, GenericStationService, GeoJsonRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
