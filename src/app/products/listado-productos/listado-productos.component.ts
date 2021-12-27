import { Component, OnInit, Input } from '@angular/core';
import { products } from "../../db_datos";
import {MatDialog} from '@angular/material/dialog';
import { FiltroProductosComponent } from './filtro-productos.component';
import { TotalProductosComponent } from './total-productos.component';
import { SearchPipe } from './pipe/search.pipe';
import { SortPipe } from './pipe/sort.pipe';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
    products = products
    searchStr:any;

   precio:any


 constructor(public dialog: MatDialog ) { }

 openFilter(): void {
  this.dialog.open(FiltroProductosComponent);
}

openTotal(): void {
  this.dialog.open(TotalProductosComponent);
}

  col:any;
  ngOnInit(): void {
  this.col="3"
}
  tresSelect(){
  this.col="3";
}
  cuatroSelect(){
  this.col="4";
}

SortBy(event:any) : void{console.log(event)
const sortpipe = new SortPipe();
this.products = sortpipe.transform(products, event);

                                 }





}





