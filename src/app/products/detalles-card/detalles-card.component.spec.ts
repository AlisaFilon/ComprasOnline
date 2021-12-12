import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCardComponent } from './detalles-card.component';

describe('DetallesCardComponent', () => {
  let component: DetallesCardComponent;
  let fixture: ComponentFixture<DetallesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
