import { Component } from '@angular/core';
import { Ventas } from "../../db_datos";
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from './dialog-example.component';


@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.css']
})

export class ListadoVentasComponent  {


displayedColumns: string[] = ['ventas', 'descripcion', 'fecha'];
  dataSource = Ventas;

    constructor(public dialog: MatDialog) { }




 openDialog(param1:any)
 {
 console.log(param1);

this.dialog.open(DialogExampleComponent, {
  width: '550px',
  data: param1,
   });

   }




}

/*

openDialog(): void {
const dialogRef = this.dialog.open(DialogExampleComponent, {
width: '250px',
data: {name: this.name, animal: this.animal},
});

dialogRef.afterClosed().subscribe(result => {
console.log('The dialog was closed');
this.animal = result;
});
}
*/



