import {Component, OnInit, Input, Output} from '@angular/core';
import {products} from "../../db_datos";
import {MatDialog} from '@angular/material/dialog';
import {FiltroProductosComponent} from './filtro-productos.component';
import {TotalProductosComponent} from './total-productos.component';
import {SearchPipe} from './pipe/search.pipe';
import {SortPipe} from './pipe/sort.pipe';
import {CarritoService} from '../carrito.service';


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  products = products
  searchStr: any;
  precio: any;
  cantidad: any;
  presupuesto: any;

  constructor(public dialog: MatDialog, private carrito: CarritoService) {
  }


  /* <<--Кнопка FILTER-->> */
  openFilter() {
    const dialogRef = this.dialog.open(FiltroProductosComponent, {
      width: '280px',
      data: {searchStr: this.searchStr},

    });
    dialogRef.afterClosed().subscribe(result => {
      this.searchStr = result;
    });
  }

  resultado(event: any) {
    console.log(event)
    if (event >=0) {
      this.presupuesto = event;
      this.cantidad = event;
    }
  }

  /* <<--Кнопка ORDEN-->> */
  SortBy(event: any): void {
    const sortpipe = new SortPipe();
    this.products = sortpipe.transform(products, event);
  }

  /* <<--Кнопка TOTAL-->> */
  openTotal(): void {
    this.dialog.open(TotalProductosComponent);
  }

  /* <<--Смена колонок на 3 и 4-->> */


  col: any;


  ngOnInit() {
    this.col = "3";
  this.presupuesto = -1;
    console.log(this.presupuesto)
  }

  tresSelect() {
    this.col = "3";
  }

  cuatroSelect() {
    this.col = "4";
  }


}










