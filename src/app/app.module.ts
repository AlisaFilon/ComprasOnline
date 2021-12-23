
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormularioModule } from './formulario/formulario.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule} from '@angular/material/input';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';





const appRoutes: Routes = [
{path: '', component: PrincipalComponent },
{path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    LoginComponent
   ],
  imports: [
    FormsModule,
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
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
