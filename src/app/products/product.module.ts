import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { ProductCardComponent } from './product-card/product-card.component';

/* import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; */



const productRoutes: Routes = [
{path: 'detalles-producto', component: DetallesProductoComponent },
{path: 'listado-productos', component: ListadoProductosComponent }
]


@NgModule({
  declarations: [
  DetallesProductoComponent,
  ListadoProductosComponent,
  ProductCardComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      /* FlexLayoutModule,
      FormsModule, */
      RouterModule.forRoot(productRoutes)
  ],
  exports: [
    DetallesProductoComponent,
    ListadoProductosComponent
  ],
    providers: [],
      bootstrap: [
      DetallesProductoComponent,
      ListadoProductosComponent
      ]
})
export class ProductModule { }
