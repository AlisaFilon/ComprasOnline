import { Component, OnInit, Input } from '@angular/core';
import { Ventas } from "../../db_datos";
import { ListadoVentasComponent } from './listado-ventas.component';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})



export class DialogExampleComponent implements OnInit {

/* @Input() param1:any; */
data:any = '000';
  constructor() { }

  ngOnInit(): void {

  }

}
