import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeProductosComponent } from './listado-de-productos.component';

describe('ListadoDeProductosComponent', () => {
  let component: ListadoDeProductosComponent;
  let fixture: ComponentFixture<ListadoDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
