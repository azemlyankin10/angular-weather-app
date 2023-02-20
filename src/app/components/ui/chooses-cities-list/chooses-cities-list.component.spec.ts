import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosesCitiesListComponent } from './chooses-cities-list.component';

describe('ChoosesCitiesListComponent', () => {
  let component: ChoosesCitiesListComponent;
  let fixture: ComponentFixture<ChoosesCitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosesCitiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosesCitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
