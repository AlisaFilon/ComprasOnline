import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeProductosComponent } from './listado-de-productos/listado-de-productos.component';
import { DetallesDeProductoComponent } from './detalles-de-producto/detalles-de-producto.component';



@NgModule({
  declarations: [
    ListadoDeProductosComponent,
    DetallesDeProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
