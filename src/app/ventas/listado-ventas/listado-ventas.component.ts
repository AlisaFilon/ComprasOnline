import { Component, OnInit } from '@angular/core';
import { Ventas } from "../../db_datos";
/* import {MatDialog} from '@angular/material/dialog';

export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'detalles',
  templateUrl: './detalles.html'
})
export class DialogElementsExampleDialog {} */


@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})

export class ListadoVentasComponent implements OnInit {

displayedColumns: string[] = ['ventas', 'descripcion', 'fecha'];
  dataSource = Ventas;


  constructor() {
   }

  ngOnInit(): void { }
}





