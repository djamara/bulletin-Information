import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TablecovidComponent } from './tablecovid/tablecovid.component';
import { VideocomponentComponent } from './videocomponent/videocomponent.component';
import { ImagesboxComponent } from './imagesbox/imagesbox.component';
import { CardComponent } from './card/card.component';
import { InfoCovidComponent } from './info-covid/info-covid.component';
import { InfoProjetComponent } from './info-projet/info-projet.component';
import { ImageCarousselComponent } from './image-caroussel/image-caroussel.component';

import {  LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TablecovidComponent,
    VideocomponentComponent,
    ImagesboxComponent,
    CardComponent,
    InfoCovidComponent,
    InfoProjetComponent,
    ImageCarousselComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-CA' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
