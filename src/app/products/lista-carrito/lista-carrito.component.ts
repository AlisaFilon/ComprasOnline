import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';



@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {
 id:any
 elem:any
 items=[] as any;
 puesto:any
 probar:any

 constructor(private carrito:CarritoService) { }

    ngOnInit(): void {
    this.items=this.carrito.ListarCarrito();
    this.puesto = this.carrito.totpuesto ;
    this.probar = this.carrito.probarpuesto;

  }
    Borrar(): void{
    this.elem=this.carrito.Eliminar(this.id);
}



}
