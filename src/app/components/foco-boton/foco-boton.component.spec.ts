import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocoBotonComponent } from './foco-boton.component';

describe('FocoBotonComponent', () => {
  let component: FocoBotonComponent;
  let fixture: ComponentFixture<FocoBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocoBotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocoBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
