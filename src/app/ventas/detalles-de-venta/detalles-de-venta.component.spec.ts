import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDeVentaComponent } from './detalles-de-venta.component';

describe('DetallesDeVentaComponent', () => {
  let component: DetallesDeVentaComponent;
  let fixture: ComponentFixture<DetallesDeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesDeVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
