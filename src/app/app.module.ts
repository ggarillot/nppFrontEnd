import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularOpenlayersModule } from 'ngx-openlayers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigMapComponent } from './big-map/big-map.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule, MatCardContent, MatProgressSpinnerModule } from '@angular/material';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    BigMapComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent
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
    // MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
