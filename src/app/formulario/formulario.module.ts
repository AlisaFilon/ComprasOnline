import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormularioRoutingModule } from './ventas-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';


const appRoutes: Routes = [
{path: '', component: FormularioComponent },
{path: 'FormularioComponent', component: FormularioComponent },
]



@NgModule({
  declarations: [
  FormularioComponent
  ],
  imports: [
        CommonModule
        BrowserModule,
        FormularioRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        RouterModule.forRoot(formularioRoutes)
  ],
  providers: [],
      bootstrap: [
     FormularioComponent
      ]
})
export class FormularioModule { }
