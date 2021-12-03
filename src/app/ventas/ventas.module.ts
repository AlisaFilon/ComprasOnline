import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VentasRoutingModule } from './ventas-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListadoVentasComponent } from './ventas/listado-ventas/listado-ventas.component';
import { DetallesVentaComponent } from './ventas/detalles-venta/detalles-venta.component';



const ventasRoutes: Routes = [
{path: '', component: DetallesVentaComponent },
{path: 'DetallesVenta', component: DetallesVentaComponent },
{path: 'listado-ventas', component: ListadoVentasComponent }
]

@NgModule({
  declarations: [
    DetallesVentaComponent,
    ListadoVentasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    VentasRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(ventasRoutes)
  ],
  providers: [],
    bootstrap: [
    DetallesVentaComponent,
    ListadoVentasComponent
    ]
})
export class VentasModule { }
