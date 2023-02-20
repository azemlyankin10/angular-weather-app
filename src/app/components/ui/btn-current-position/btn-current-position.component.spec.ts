import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCurrentPositionComponent } from './btn-current-position.component';

describe('BtnCurrentPositionComponent', () => {
  let component: BtnCurrentPositionComponent;
  let fixture: ComponentFixture<BtnCurrentPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCurrentPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCurrentPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
