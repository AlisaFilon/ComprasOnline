import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeVentasComponent } from './listado-de-ventas/listado-de-ventas.component';
import { DetallesDeVentaComponent } from './detalles-de-venta/detalles-de-venta.component';



@NgModule({
  declarations: [
    ListadoDeVentasComponent,
    DetallesDeVentaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
