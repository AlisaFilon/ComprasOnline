import {Pipe, PipeTransform } from '@angular/core';
import { products } from "../../../db_datos";

@Pipe ({
name: 'search'
})


export class SearchPipe implements PipeTransform{
transform (products:any, value:any) {
if (!!value){console.log(value)
const prod = products.filter((product:any) => {
return product.precio == value})
console.log(prod);
return prod;

}
return products;
/* return product.precio > value1 && product.precio <= value2 */


}


constructor (){ }



}

