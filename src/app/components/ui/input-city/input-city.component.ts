import { Component, EventEmitter, Output } from '@angular/core';
import { Coord } from 'src/app/interfaces/weather-data';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
    selector: 'app-input-city',
    templateUrl: './input-city.component.html',
    styleUrls: ['./input-city.component.scss'],
})
export class InputCityComponent {
    constructor(private weatherService: WeatherService) {}

    @Output() submitted = new EventEmitter<any>();
    searchTerm = '';
    cities: string[] = [];
    coords: Coord | undefined;

    onSubmit() {
        this.submitted.emit();
        this.searchTerm = '';
    }

    onSearch() {
        this.weatherService
            .getGeocode(this.searchTerm, 6)
            .subscribe((result) => {
                this.cities = result.map((el) => `${el.name}(${el.country})`);
            });
    }
}
