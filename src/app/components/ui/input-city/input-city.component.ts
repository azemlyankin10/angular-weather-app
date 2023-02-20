import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, switchMap } from 'rxjs';
import { Coord } from 'src/app/interfaces/weather-data';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
    selector: 'app-input-city',
    templateUrl: './input-city.component.html',
    styleUrls: ['./input-city.component.scss'],
})
export class InputCityComponent implements OnInit {
    constructor(private weatherService: WeatherService) {}

    @Output() submitted = new EventEmitter<any>();
    searchTerm = '';
    cities: string[] = [];
    coords: Coord | undefined;

    ngOnInit() {
        const searchInput = document.getElementById(
            'search'
        ) as HTMLInputElement;

        fromEvent(searchInput, 'input')
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                switchMap(() => {
                    return this.weatherService.getGeocode(this.searchTerm, 6);
                })
            )
            .subscribe((result) => {
                this.cities = result.map((el) => `${el.name}(${el.country})`);
            });
    }

    onSubmit() {
        this.submitted.emit();
        this.searchTerm = '';
    }
}
