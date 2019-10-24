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

@NgModule({
  declarations: [
    AppComponent,
    BigMapComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
