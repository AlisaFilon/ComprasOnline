import { Component, OnInit } from '@angular/core';
import { products } from "../../db_datos";


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {


 products = products
 searchStr = ''



  constructor() { }

 col:any;
  ngOnInit(): void {
  this.col="3"
}

tresSelect(){
this.col="3";
}


cuatroSelect(){
this.col="4";
}


}




