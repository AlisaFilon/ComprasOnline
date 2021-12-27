import {Pipe, PipeTransform } from '@angular/core';
import { products } from "../../../db_datos";
import * as _ from "lodash";


@Pipe ({
name: 'sort'
})

export class SortPipe implements PipeTransform{
transform(products: Array<any>, precio: any): any {
if (!!precio){console.log(precio)
const sortedArray = _.sortBy(products, 'precio');
console.log(sortedArray);
return sortedArray;
}
return products;
}

}


