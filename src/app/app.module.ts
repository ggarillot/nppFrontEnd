import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularOpenlayersModule } from 'ngx-openlayers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigMapComponent } from './big-map/big-map.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BigMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
