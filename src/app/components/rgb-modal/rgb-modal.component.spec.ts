import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbModalComponent } from './rgb-modal.component';

describe('RgbModalComponent', () => {
  let component: RgbModalComponent;
  let fixture: ComponentFixture<RgbModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
