import { Component, Inject, Optional } from '@angular/core';
import { products } from "../../db_datos";
import { ListadoProductosComponent } from './listado-productos.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { SearchPipe } from './pipe/search.pipe';
import {Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.css']
})
export class FiltroProductosComponent  {
    products = products
    searchStr:any




constructor (public dialogRef: MatDialogRef<FiltroProductosComponent>,) { }

    onNoClick(): void {
    this.dialogRef.close();
                      }

    onClick(searchStr:any): void {
    console.log(this.searchStr);
    const searchpipe = new SearchPipe();

    this.products = searchpipe.transform(products, searchStr);
                                 }


                                       }


