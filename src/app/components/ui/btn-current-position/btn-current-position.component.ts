import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-btn-current-position',
    templateUrl: './btn-current-position.component.html',
    styleUrls: ['./btn-current-position.component.scss'],
})
export class BtnCurrentPositionComponent {
    @Output() clickEvent = new EventEmitter<any>();
    @Input() text = 'Get wheather by current position';

    getWheatherByCurrentPosition() {
        this.clickEvent.emit();
    }
}
