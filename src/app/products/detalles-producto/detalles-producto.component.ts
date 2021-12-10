import { Component, OnInit, Input } from '@angular/core';
import { det } from "../../db_datos";


@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {


@Input() det:any;

  constructor() { }

  ngOnInit(): void {
  }

}
