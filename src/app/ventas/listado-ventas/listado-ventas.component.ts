import { Component, OnInit } from '@angular/core';
import { Ventas } from "../../db_datos";
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from './dialog-example.component';


@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})

export class ListadoVentasComponent implements OnInit {

displayedColumns: string[] = ['ventas', 'descripcion', 'fecha'];
  dataSource = Ventas;


  constructor(public dialog: MatDialog) { }
 openDialog() {this.dialog.open(DialogExampleComponent);}

  ngOnInit(): void { }


}






