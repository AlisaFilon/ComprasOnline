import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeVentasComponent } from './listado-de-ventas.component';

describe('ListadoDeVentasComponent', () => {
  let component: ListadoDeVentasComponent;
  let fixture: ComponentFixture<ListadoDeVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
