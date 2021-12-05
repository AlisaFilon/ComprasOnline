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
import { FormularioComponent } from './formulario.component';



const formularioRoutes: Routes = [
{path: 'formulario-component', component: FormularioComponent },
]



@NgModule({
  declarations: [
  FormularioComponent
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
        RouterModule.forRoot(formularioRoutes)
  ],
  exports: [FormularioComponent
  ],
      providers: [],
      bootstrap: [FormularioComponent]
})
export class FormularioModule { }
