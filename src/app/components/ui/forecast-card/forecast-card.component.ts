import { Component, Input } from '@angular/core';
import { IForecastCard } from 'src/app/interfaces/card-data';

@Component({
    selector: 'app-forecast-card',
    templateUrl: './forecast-card.component.html',
    styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent {
    @Input() forecastData: IForecastCard[][] = [[]];
    @Input() cityName = '';
}
