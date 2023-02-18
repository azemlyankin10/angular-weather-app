import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InputSityComponent } from './components/input-sity/input-sity.component';
import { WheatherCardComponent } from './components/wheather-card/wheather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoaderComponent } from './components/loader/loader.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        InputSityComponent,
        WheatherCardComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TypeaheadModule.forRoot(),
    ],
    providers: [Geolocation],
    bootstrap: [AppComponent],
})
export class AppModule {}
