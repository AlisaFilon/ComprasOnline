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
import { ListadoVentasComponent } from './listado-ventas/listado-ventas.component';
import { DetallesVentaComponent } from './detalles-venta/detalles-venta.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogExampleComponent} from './listado-ventas/dialog-example.component';




const ventasRoutes: Routes = [
{path: 'detalles-venta', component: DetallesVentaComponent },
{path: 'listado-ventas', component: ListadoVentasComponent }
]

@NgModule({
  declarations: [
    DetallesVentaComponent,
    ListadoVentasComponent,
    DialogExampleComponent
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
    MatTableModule,
    MatDialogModule,
    RouterModule.forRoot(ventasRoutes)
  ],
  entryComponents: [DialogExampleComponent],

  exports:[
  DialogExampleComponent,
  ListadoVentasComponent
  ],

  providers: [],
    bootstrap: [
    DetallesVentaComponent,
    ListadoVentasComponent
    ]
})
export class VentasModule { }

