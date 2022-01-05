import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from'@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FiltroProductosComponent } from './listado-productos/filtro-productos.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { SearchPipe } from './listado-productos/pipe/search.pipe';
import { SortPipe } from './listado-productos/pipe/sort.pipe';
import { TotalProductosComponent } from './listado-productos/total-productos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import {MatTableModule} from '@angular/material/table';




const productRoutes: Routes = [

{ path: 'listado-productos', component: ListadoProductosComponent },
{ path: 'products/:productId', component: ProductDetailsComponent },
{ path: 'lista-carrito', component: ListaCarritoComponent },
{ path: 'carrito/:productId', component: ProductDetailsComponent }
]


@NgModule({
  declarations: [
  SearchPipe,
  SortPipe,
  ListadoProductosComponent,
  ProductCardComponent,
  ProductDetailsComponent,
  FiltroProductosComponent,
  TotalProductosComponent,
  ListaCarritoComponent,

  ],
  imports: [
      MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSliderModule,
      ReactiveFormsModule,
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatGridListModule,
      FormsModule,
      MatTableModule,
      RouterModule.forRoot(productRoutes)
  ],
  exports: [
    SearchPipe,
    ListadoProductosComponent,
    FiltroProductosComponent
  ],
    providers: [],
      bootstrap: [
      ListadoProductosComponent
      ]
})
export class ProductModule { }
