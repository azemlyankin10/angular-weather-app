import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-chooses-cities-list',
    templateUrl: './chooses-cities-list.component.html',
    styleUrls: ['./chooses-cities-list.component.scss'],
})
export class ChoosesCitiesListComponent {
    @Input() choosesCities: string[] = [];
    @Output() deleteAllEvent = new EventEmitter<any>();
    @Output() chooseCityEvent = new EventEmitter<string>();
    @Output() deleteBtnEvent = new EventEmitter<string[]>();

    deleteAllChoosesCities() {
        this.deleteAllEvent.emit();
    }

    chooseThePreviouslyCity(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (target.classList.contains('list-group-item')) {
            const value = target.getAttribute('data-buttonCity');
            value && this.chooseCityEvent.emit(value);

            return;
        }

        if (target.classList.contains('delete-btn')) {
            const deleteButtonCity = target.getAttribute(
                'data-deleteButtonCity'
            );
            const arrayWithoutDeletedElement = this.choosesCities.filter(
                (el: string) => el !== deleteButtonCity
            );

            this.deleteBtnEvent.emit(arrayWithoutDeletedElement);
            return;
        }
    }
}
