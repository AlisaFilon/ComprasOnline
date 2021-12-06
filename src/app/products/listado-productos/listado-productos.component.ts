import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {


cards = [
{img:'/assets/img/imgcards/1.png', name: 'NM1', modelo: 'MDL1', price: 'PRC1'},
{img:'/assets/img/imgcards/2.png', name: 'NM2', modelo: 'MDL2', price: 'PRC2'},
{img:'/assets/img/imgcards/3.png', name: 'NM3', modelo: 'MDL3', price: 'PRC3'},
{img:'/assets/img/imgcards/4.png', name: 'NM4', modelo: 'MDL4', price: 'PRC4'},
{img:'/assets/img/imgcards/5.png', name: 'NM5', modelo: 'MDL5', price: 'PRC5'},
{img:'/assets/img/imgcards/6.png', name: 'NM6', modelo: 'MDL6', price: 'PRC6'}


]



  constructor() {
  }

  ngOnInit(): void {
  }

}
