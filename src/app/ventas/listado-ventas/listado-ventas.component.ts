import { Component, OnInit } from '@angular/core';
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



export interface PeriodicElement {
  ventas: string;
  descripcion: string;
  fecha: any;
}

const Ventas: PeriodicElement[] = [
  {ventas: 'VNT1', descripcion: 'DSC1', fecha: '01/01/2021'},
  {ventas: 'VNT2', descripcion: 'DSC2', fecha: '02/01/2021'},
  {ventas: 'VNT3', descripcion: 'DSC3', fecha: '03/01/2021'},
  {ventas: 'VNT4', descripcion: 'DSC4', fecha: '04/01/2021'},
  {ventas: 'VNT5', descripcion: 'DSC5', fecha: '05/01/2021'},
  {ventas: 'VNT6', descripcion: 'DSC6', fecha: '06/01/2021'},
  {ventas: 'VNT7', descripcion: 'DSC7', fecha: '07/01/2021'},
  {ventas: 'VNT8', descripcion: 'DSC8', fecha: '08/01/2021'},
  {ventas: 'VNT9', descripcion: 'DSC9', fecha: '09/01/2021'},
  {ventas: 'VNT10',descripcion: 'DSC10', fecha: '10/01/2021'}

]

function totalVentas(){
return Ventas.length;
};
console.log (totalVentas());




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





