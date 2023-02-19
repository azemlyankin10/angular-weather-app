import { Component, OnInit } from '@angular/core';
import { IForecastCard, IWeatherCard } from 'src/app/interfaces/card-data';
import { IForecast } from 'src/app/interfaces/forecast-data';
import { RootWeatherData } from 'src/app/interfaces/weather-data';
import { WheatherService } from 'src/app/services/wheather.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(private weatherService: WheatherService) {}

    weatherCardData: IWeatherCard | undefined;

    forecastCardsData: IForecastCard[][] = [];
    isLoading = false;
    isForecastLoading = false;
    private currentSity = '';

    getWheatherByCurrentPossition() {
        this.isLoading = true;
        this.weatherService.getWeatherInCurrentPossition().subscribe((data) => {
            this.weatherCardData = this.createWeatherCard(data);
            this.isLoading = false;
            this.currentSity = data.name;
        });
    }

    getForecast() {
        this.isForecastLoading = true;
        this.weatherService.getForecast(this.currentSity).subscribe((data) => {
            this.forecastCardsData = groupByDate(data).map((el: any) =>
                el.map((card: any) => this.createForecastCard(card))
            );
            this.isForecastLoading = false;
        });
    }

    onSubmitForm(sity: string) {
        sity = sity.replace(/\([^)]*\)/g, '');
        this.isLoading = true;
        this.forecastCardsData = [];
        this.weatherService.getWheatherByName(sity).subscribe((data) => {
            this.weatherCardData = this.createWeatherCard(data);
            this.isLoading = false;
            this.currentSity = sity;
        });
    }

    private createWeatherCard(data: RootWeatherData): IWeatherCard {
        return {
            country: data.sys.country,
            city: data.name,
            temp: Math.round(data.main.temp),
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            tempName: data.weather[0].main,
            feelsLike: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: Math.round(data.wind.speed),
            windDirection: data.wind.deg,
        };
    }

    private createForecastCard(data: IForecast): IForecastCard {
        return {
            date: data.dt,
            temp: data.main.temp,
            feelsLikeTemp: data.main.feels_like,
            min: data.main.temp_min,
            max: data.main.temp_max,
            tempName: data.weather[0].description,
            humidity: data.main.humidity,
            wind: data.wind.speed,
        };
    }
}

function groupByDate(arr: IForecast[]) {
    const groups: any = {};
    arr.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(item);
    });
    return Object.values(groups);
}
