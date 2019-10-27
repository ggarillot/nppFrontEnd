import { GenericUserService } from './service/generic-user.service';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { GenericStationService } from 'src/app/service/generic-station.service';
import { ListPowerBankByStationComponent } from './station/list-power-bank-by-station/list-power-bank-by-station.component';
import { SubscriptionService } from './service/subscription.service';
import { PowerBankService } from './service/power-bank.service';
import { NormalStationService } from './service/normal-station.service';
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
  MatExpansionModule, MatDividerModule, MatListModule, MatProgressBarModule
} from '@angular/material';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LogoutComponent } from './logout/logout.component';
import { StationDetailsComponent } from './station/station-details/station-details.component';
import { QuiSommesNousComponent } from './infos/qui-sommes-nous/qui-sommes-nous.component';

@NgModule({
  declarations: [
    AppComponent,
    BigMapComponent,
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
    QuiSommesNousComponent
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
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true},
     // tslint:disable-next-line:max-line-length
     NormalStationService, PowerBankService, SubscriptionService, StandardUserService, StandardUser, GenericUserService, GenericStationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
