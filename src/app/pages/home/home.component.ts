import { Component } from '@angular/core';
import { IForecastCard, IWeatherCard } from 'src/app/interfaces/card-data';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { WeatherService } from 'src/app/services/weather.service';
import {
    createForecastCard,
    createWeatherCard,
    groupByDate,
} from 'src/app/utils/home-component-functions';

const LOCALSTORAGEKEY = 'chooses-cities';
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(
        private weatherService: WeatherService,
        private localstorageService: LocalstorageService
    ) {}

    weatherCardData: IWeatherCard | undefined;
    forecastCardsData: IForecastCard[][] = [];
    choosesCities = this.setChoosesCities();
    isLoading = false;
    isForecastLoading = false;
    title = 'Choose the city to show the weather!';
    private currentCity = '';

    private setChoosesCities() {
        const arr = this.localstorageService.getItem(LOCALSTORAGEKEY);
        if (!arr) {
            return [];
        }
        return arr;
    }

    getWheatherByCurrentPosition() {
        this.isLoading = true;
        this.weatherService.getWeatherInCurrentPosition().subscribe(
            (data) => {
                this.weatherCardData = createWeatherCard(data);
                this.isLoading = false;
                this.currentCity = data.name;
                this.title = 'Choose the city to show the weather!';
                this.localstorageService.setItem(
                    LOCALSTORAGEKEY,
                    this.weatherCardData?.city
                );
                this.choosesCities = this.setChoosesCities();
            },
            (error) => {
                this.title =
                    'Problem with getting weather for current position! \n Maybe you have location services turned off?';
                console.log(
                    'error with getting weather by current position',
                    error
                );
                alert(error.message);
                this.weatherCardData = undefined;
                this.isLoading = false;
            }
        );
    }

    getForecast() {
        this.isForecastLoading = true;
        this.weatherService.getForecast(this.currentCity).subscribe(
            (data) => {
                this.forecastCardsData = groupByDate(data).map((el) =>
                    el.map((card) => createForecastCard(card))
                );
                this.isForecastLoading = false;
            },
            (error) => {
                console.log('error with getting forecast', error);
                alert('There is a problem with getting the forecast!');
            }
        );
    }

    getWeatherByName(city: string) {
        city = city.replace(/\([^)]*\)/g, '');
        this.isLoading = true;
        this.forecastCardsData = [];
        this.weatherService.getWheatherByName(city).subscribe(
            (data) => {
                this.weatherCardData = createWeatherCard(data);
                this.currentCity = city;
                this.isLoading = false;
                this.title = 'Choose the city to show the weather!';
                this.localstorageService.setItem(LOCALSTORAGEKEY, city);
                this.choosesCities = this.setChoosesCities();
            },
            (error) => {
                this.title = 'City not found!';
                console.log('error with getting weather by name', error);
                this.weatherCardData = undefined;
                this.isLoading = false;
            }
        );
    }

    chooseThePreviouslyCity(cityName: string) {
        this.getWeatherByName(cityName);
    }

    deleteItemFromPreviouslyList(arrayOfList: string[]) {
        this.localstorageService.setItem(LOCALSTORAGEKEY, arrayOfList, true);
        this.choosesCities = this.setChoosesCities();
    }

    deleteAllChoosesCities() {
        this.localstorageService.clear(LOCALSTORAGEKEY);
        this.choosesCities = this.setChoosesCities();
    }
}
