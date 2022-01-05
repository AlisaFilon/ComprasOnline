import { Component, OnInit, Input, Injectable } from '@angular/core';
import { products } from "../../db_datos";
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
 products = products;

@Input() product:any;


  constructor (private carrito:CarritoService){ }
  puesto:any
  ngOnInit(): void {

  }
 agregarCarrito(product:any) {
  this.carrito.agregarCarrito(product);
  this.puesto = this.carrito.totpuesto ;
      /*  window.alert("Producto adicionado con id "+product.id); */
  }
}
