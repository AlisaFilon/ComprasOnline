
import {Pipe, PipeTransform } from '@angular/core';
import { products } from "../../db_datos";

@Pipe ({
name: 'search'
})
export class SearchPipe implements PipeTransform{



constructor (){ }

transform (products:any, value:any){
return products.filter((product:any) => {console.log(value, product.precio);
return product.precio == value

/* return product.precio > value1 && product.precio <= value2 */

})
}

}

