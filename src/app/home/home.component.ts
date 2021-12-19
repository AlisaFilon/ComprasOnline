import { Component, OnInit } from '@angular/core';
import { products } from "../db_datos";
import { Ventas } from "../db_datos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
totprod:any;
totvent:any;
products = products

  constructor() { }
ngOnInit(): void {

this.totprod=totalprod();
this.totvent=totalvent();
  }

  }

function totalprod () {
const totp = products;
return totp.length;
}

function totalvent () {
const totv = Ventas;
return totv.length;
}





