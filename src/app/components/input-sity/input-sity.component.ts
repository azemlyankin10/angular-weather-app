import { Component, EventEmitter, Output } from '@angular/core';
import { Coord } from 'src/app/interfaces/weather-data';
import { WheatherService } from 'src/app/services/wheather.service';

@Component({
    selector: 'app-input-sity',
    templateUrl: './input-sity.component.html',
    styleUrls: ['./input-sity.component.scss'],
})
export class InputSityComponent {
    constructor(private wheatherService: WheatherService) {}

    @Output() submitted = new EventEmitter<any>();
    searchTerm = '';
    cities: string[] = [];
    coords: Coord | undefined;

    onSubmit() {
        this.submitted.emit();
        this.searchTerm = '';
    }

    onSearch() {
        this.wheatherService
            .getGeocod(this.searchTerm, 6)
            .subscribe((result) => {
                this.cities = result.map((el) => `${el.name}(${el.country})`);
            });
    }
}
