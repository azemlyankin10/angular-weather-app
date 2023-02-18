import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Coord } from 'src/app/interfaces/weather-data';
import { WheatherService } from 'src/app/services/wheather.service';

@Component({
    selector: 'app-input-sity',
    templateUrl: './input-sity.component.html',
    styleUrls: ['./input-sity.component.scss'],
})
export class InputSityComponent {
    constructor(private wheatherService: WheatherService) {
        this.searchSubject.pipe(debounceTime(500)).subscribe((searchText) => {
            this.wheatherService
                .getGeocod(searchText, 6)
                .subscribe((result) => {
                    this.cities = result.map(
                        (el) => `${el.name}(${el.country})`
                    );
                });
        });
    }

    @Output() submitted = new EventEmitter<any>();
    private searchSubject = new Subject<string>();
    searchTerm = '';
    cities: string[] = [];
    coords: Coord | undefined;

    onSubmit() {
        this.submitted.emit();
    }

    onSearch() {
        this.searchSubject.next(this.searchTerm);
    }
}
