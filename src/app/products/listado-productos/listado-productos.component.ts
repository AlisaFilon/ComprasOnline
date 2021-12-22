import { Component, OnInit } from '@angular/core';
import { products } from "../../db_datos";
import {MatDialog} from '@angular/material/dialog';
import {FiltroProductosComponent} from './filtro-productos.component';



@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {
    products = products
    searchStr = ''


 constructor(public dialog: MatDialog) { }
 openDialog(): void {
  this.dialog.open(FiltroProductosComponent);
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
}



