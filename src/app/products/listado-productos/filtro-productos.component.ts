import { Component, Input } from '@angular/core';
import { Productos } from "../../db_datos";
import { ListadoProductosComponent } from './listado-productos.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.css']
})
export class FiltroProductosComponent  {


  max:any = 100;
  min:any = 0;
constructor(public dialogRef: MatDialogRef<FiltroProductosComponent>) { }

onNoClick(): void {
    this.dialogRef.close();
    console.log('CLOSE');
    }
    onClick(): void {
        this.dialogRef.close();
        console.log('ok');
        }
   }

