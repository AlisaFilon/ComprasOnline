import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductRoutingModule } from './product-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListadoProductosComponent } from './products/listado-ventas/listado-productos.component';
import { DetallesProductoComponent } from './products/detalles-venta/detalles-producto.component';


const productRoutes: Routes = [

{path: '', component: DetallesProductoComponent },
{path: 'DetallesProducto', component: DetallesProductoComponent },
{path: 'listado-productos', component: ListadoProductosComponent }
]


@NgModule({
  declarations: [
  DetallesProductoComponent,
  ListadoProductosComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      ProductRoutingModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      RouterModule.forRoot(productRoutes)
  ],
    providers: [],
      bootstrap: [
      DetallesProductoComponent,
      ListadoProductosComponent
      ]
})
export class ProductModule { }
