import { Component, OnInit, Input, Inject } from '@angular/core';
import { Ventas } from "../../db_datos";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})


export class DialogExampleComponent {


constructor(public dialogRef: MatDialogRef<DialogExampleComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,) {}

 onNoClick(): void {
    this.dialogRef.close();
    console.log('CLOSE');
    }
    onClick(): void {
        this.dialogRef.close();
        console.log(this.data);
        }

}

