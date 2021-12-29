import {Pipe, PipeTransform } from '@angular/core';
import { products } from "../../../db_datos";
import * as _ from "lodash";


@Pipe ({
name: 'sort'
})

export class SortPipe implements PipeTransform{
transform(products: Array<any>, precio: any): any {
if (!!precio){
const sortedArray = _.sortBy(products, 'precio');
return sortedArray;
}
return products;
}

}


