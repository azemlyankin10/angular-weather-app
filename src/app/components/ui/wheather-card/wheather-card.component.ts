import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWeatherCard } from 'src/app/interfaces/card-data';

@Component({
    selector: 'app-wheather-card',
    templateUrl: './wheather-card.component.html',
    styleUrls: ['./wheather-card.component.scss'],
})
export class WheatherCardComponent {
    @Input() cardData: IWeatherCard = {
        city: '',
        feelsLike: 0,
        humidity: 0,
        pressure: 0,
        windSpeed: 0,
        windDirection: 0,
        temp: 0,
        tempName: '',
        country: '',
        min: 0,
        max: 0,
    };

    @Input() showForecastButton = true;

    @Output() getforecastbutton = new EventEmitter<any>();

    getForecast() {
        this.getforecastbutton.emit();
    }
}
