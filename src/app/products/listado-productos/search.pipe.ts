
import {Pipe, PipeTransform } from '@angular/core';
import { products } from "../../db_datos";

@Pipe ({
name: 'search'
})
export class SearchPipe implements PipeTransform{



constructor (){ }

transform (products:any, value:any){console.log(value);
return products.filter((product:any) => {
return product.nombre.includes(value)
})
}

}

