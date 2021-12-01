import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomeComponent } from './components/home/home.component';
import { ListadoVentasComponent } from './ventas/listado-ventas/listado-ventas.component';
import { DetallesVentaComponent } from './ventas/detalles-venta/detalles-venta.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetallesProductoComponent } from './products/detalles-producto/detalles-producto.component';
import { ListadoProductosComponent } from './products/listado-productos/listado-productos.component';

const appRoutes: Routes = [
{path: '', component: PrincipalComponent },
{path: 'home', component: HomeComponent },
{path: 'formulario', component: FormularioComponent },
{path: 'listado-ventas', component: ListadoVentasComponent },
{path: 'detalles-venta', component: DetallesVentaComponent },
{path: 'detalles-producto', component: DetallesProductoComponent },
{path: 'listado-productos', component: ListadoProductosComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    ListadoVentasComponent,
    DetallesVentaComponent,
    FormularioComponent,
    DetallesProductoComponent,
    ListadoProductosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
