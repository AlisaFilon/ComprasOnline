import { Injectable } from '@angular/core';
import { products } from "../db_datos";



@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 products = products;
 items=[] as any;
 totpuesto:any;
 puestoCliente:any;
 count:any



constructor() { }


  agregarCarrito(product: any) {

    const limit = 80;
    const pc = (limit - ((this.totpuesto || 0) + product.precio));
    this.puestoCliente = pc;
    const curItem = this.items.find((elemento: any) => (elemento.id == product.id));
    console.log(pc);

    if (limit - ((this.totpuesto || 0) + product.precio) >= 0) {
      if (curItem) {
        curItem.cantidad += 1;
      } else {
        this.items.push(product);
      }
      /*this.count += .cantidad;*/
    }

    this.totpuesto = this.items
      .map((elemento: any) => (elemento.precio * elemento.cantidad))
      .reduce((previousValue: any, currentValue: any) => previousValue + currentValue);
    this.count = this.items
      .map((elemento: any) => elemento.cantidad)
      .reduce((previousValue: any, currentValue: any) => previousValue + currentValue);
    return this.totpuesto;

  }






/*
 agregarCarrito(product: any){
console.log()
  const curItem = this.items.find((elemento:any) => (elemento.id==product.id));

  if(curItem){
    curItem.cantidad+=1;
  } else {
    this.items.push(product);
  }

  this.totpuesto = this.items
    .map((elemento:any) => (elemento.precio*elemento.cantidad))
    .reduce((previousValue:any, currentValue:any) => previousValue + currentValue);

}
 */





  Eliminar(id:any){
  const resultado=this.items.findIndex((e:any)=> e.id == id);
  this.items.splice(resultado,1);
  return this.items;
  }

  /* LimpiarCarrito(){
  this.items=[];
  return this.items;
  } */

   ListarCarrito(){
   return this.items;
   }


}
