import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootWeatherData } from '../interfaces/weather-data';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { catchError, from, map, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { IGeoCodeData } from '../interfaces/geo-data';
import { IForecast } from '../interfaces/forecast-data';

@Injectable({
    providedIn: 'root',
})
export class WheatherService {
    constructor(private http: HttpClient, private geolocation: Geolocation) {}

    apiKey = environment.openWeatherMapApi;

    getGeocod(name: string, limit: number) {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${limit}&appid=${this.apiKey}`;

        return from(this.http.get<IGeoCodeData[]>(url)).pipe(
            map((resp) =>
                resp.map((el) => ({
                    name: el.name,
                    lat: el.lat,
                    lon: el.lon,
                    country: el.country,
                    state: el.state,
                }))
            ),
            catchError((error) => {
                console.log('Error get sity', error);
                return [];
            })
        );
    }

    getForecast(city: string) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${environment.openWeatherMapApi}&units=metric`;

        return this.http.get(url).pipe(
            map((data: any) => data.list as IForecast[]),
            catchError((error) => {
                console.log('Problem with getting forecast', error);
                return [];
            })
        );
    }

    getWheatherByName(city: string) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.openWeatherMapApi}&units=metric`;
        return this.http.get<RootWeatherData>(url).pipe(
            catchError((error) => {
                console.log('Problem with getting weather', error);
                return [];
            })
        );
    }

    getWeatherInCurrentPossition() {
        return from(this.geolocation.getCurrentPosition()).pipe(
            switchMap((resp) => {
                const latitude = resp.coords.latitude;
                const longitude = resp.coords.longitude;
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;

                return this.http.get<RootWeatherData>(apiUrl);
            }),
            catchError((error) => {
                console.log('Error getting location', error);
                alert('Please enable location services to use this feature.');
                return [];
            })
        );
    }

    getWheather() {
        // delete!!
        // const lat = 51.003109;
        // const lon = 4.3026;
        // return this.http.get<RootWeatherData>(
        //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d6a215050757b3f12c6414eead157863`
        // );
    }
}
