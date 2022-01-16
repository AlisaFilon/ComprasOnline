import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
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
@Output() prsupuesto = new EventEmitter<number>();

  constructor (private carrito:CarritoService){ }

  ngOnInit(): void {

  }



agregarCarrito(product:any) {
  this.carrito.agregarCarrito(product);
  this.prsupuesto.emit(this.carrito.puestoCliente);
  }
}
