import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionModalComponent } from './habitacion-modal.component';

describe('HabitacionModalComponent', () => {
  let component: HabitacionModalComponent;
  let fixture: ComponentFixture<HabitacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
