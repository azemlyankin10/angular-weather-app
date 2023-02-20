import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InputCityComponent } from './components/ui/input-city/input-city.component';
import { WheatherCardComponent } from './components/ui/wheather-card/wheather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ForecastCardComponent } from './components/ui/forecast-card/forecast-card.component';
import { BtnCurrentPositionComponent } from './components/ui/btn-current-position/btn-current-position.component';
import { ChoosesCitiesListComponent } from './components/ui/chooses-cities-list/chooses-cities-list.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        InputCityComponent,
        WheatherCardComponent,
        LoaderComponent,
        ForecastCardComponent,
        BtnCurrentPositionComponent,
        ChoosesCitiesListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TypeaheadModule.forRoot(),
        CarouselModule.forRoot(),
    ],
    providers: [Geolocation],
    bootstrap: [AppComponent],
})
export class AppModule {}
