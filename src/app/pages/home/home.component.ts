import { Component, OnInit } from '@angular/core';
import { IWeatherCard } from 'src/app/interfaces/card-data';
import { WheatherService } from 'src/app/services/wheather.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private weatherService: WheatherService) {}

    weatherCardData = {} as IWeatherCard;
    isLoading = false;
    // isLoading = true;

    ngOnInit() {
        // TODO: make to get corrent weather by button becouse of many requests to api
        // this.weatherService.getGeocod().subscribe((a) => console.log(a));
        // this.weatherService.getWeatherInCurrentPossition().subscribe((data) => {
        //     this.weatherCardData = {
        //         city: data.name,
        //         temp: Math.round(data.main.temp),
        //         tempName: data.weather[0].main,
        //         feelsLike: Math.round(data.main.feels_like),
        //         humidity: data.main.humidity,
        //         pressure: data.main.pressure,
        //         windSpeed: Math.round(data.wind.speed),
        //         windDirection: data.wind.deg,
        //     };
        //     this.isLoading = false;
        // });
    }

    onSubmitForm(sity: string) {
        this.weatherService.getWheatherByName(sity).subscribe((data) => {
            console.log(data);
        });
    }
}
