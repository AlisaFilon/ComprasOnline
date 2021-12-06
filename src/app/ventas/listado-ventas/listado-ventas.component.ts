import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  ventas: string;
  descripcion: number;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ventas: 'Helium', descripcion: 4.0026, fecha: 'He'},
  {ventas: 'Lithium', descripcion: 6.941, fecha: 'Li'},
  {ventas: 'Beryllium', descripcion: 9.0122, fecha: 'Be'},
  {ventas: 'Boron', descripcion: 10.811, fecha: 'B'},
  {ventas: 'Carbon', descripcion: 12.0107, fecha: 'C'},
  {ventas: 'Nitrogen', descripcion: 14.0067, fecha: 'N'},
  {ventas: 'Oxygen', descripcion: 15.9994, fecha: 'O'},
  {ventas: 'Fluorine', descripcion: 18.9984, fecha: 'F'},
  {ventas: 'Neon', descripcion: 20.1797, fecha: 'Ne'}
];


@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})
export class ListadoVentasComponent implements OnInit {
displayedColumns: string[] = ['ventas', 'descripcion', 'fecha'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
