/* Material module */
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

/* Components module */
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';

/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { FormularioModule } from './formulario/formulario.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductModule } from './products/product.module';



const appRoutes: Routes = [
{path: '', component: PrincipalComponent },
{path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent
   ],
  imports: [
    FormularioModule,
    VentasModule,
    ProductModule,
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
