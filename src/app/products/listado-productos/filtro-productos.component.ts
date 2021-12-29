import { Component, Inject } from '@angular/core';
import { products } from "../../db_datos";
import { ListadoProductosComponent } from './listado-productos.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';



export interface DialogData {
  searchStr: any;
}

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.css']
})

export class FiltroProductosComponent  {
    products = products

constructor (public dialogRef: MatDialogRef<FiltroProductosComponent>,
@Inject(MAT_DIALOG_DATA) public data: DialogData,
            ) {}

    onNoClick(): void {
    this.dialogRef.close();
                      }
}

