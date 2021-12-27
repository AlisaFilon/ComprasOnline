import { Component, OnInit  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { products } from "../../db_datos";




@Component({
  selector: 'app-total-productos',
  templateUrl: './total-productos.component.html',
  styleUrls: ['./total-productos.component.css']
})
export class TotalProductosComponent implements OnInit  {
totprice:any
products = products

  constructor(public dialogRef: MatDialogRef<TotalProductosComponent>,) { }
  ngOnInit(): void {
  this.totprice=this.totalprice();
  }

onNoClick(): void {
    this.dialogRef.close();
    console.log('CLOSE');
    }
  /*   onClick(): void {
 this.dialogRef.close();
     console.log('CLOSE');
     } */


totalprice ():any {
 const totp = this.products;
 console.log(totp);
 return products.map(product => product.precio).reduce(function(previousValue, currentValue) {
 return previousValue + currentValue;
 });

 }

}





