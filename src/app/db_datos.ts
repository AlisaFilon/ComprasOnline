import { Component, OnInit } from '@angular/core';

 export interface Productos {
  id: number;
  img: any;
  nombre: string;
  modelo: string;
  descripcion: string;
  caracteristicas: any;
  precio: number;
  cantidad: number;
  }

export const products: Productos[]  = [
  {id:1, img:'/assets/img/imgcards/1.png', nombre: 'Secadores de pelo', modelo: 'MDL1', precio: 15,  descripcion: 'rojo', caracteristicas: 'Potente secador de cabello de 2200 vatios', cantidad: 8 },
  {id:2, img:'/assets/img/imgcards/2.png', nombre: 'Cepillo electrico', modelo: 'MDL2', precio: 20, descripcion: 'rojo', caracteristicas: 'Potente secador de cabello de 2200 vatios', cantidad: 8 },
  {id:3, img:'/assets/img/imgcards/3.png', nombre: 'Plancha', modelo: 'MDL3', precio: 25, descripcion: 'rojo', caracteristicas: 'Potente secador de cabello de 2200 vatios', cantidad: 8 },
  {id:4, img:'/assets/img/imgcards/4.png', nombre: 'Campana secador', modelo: 'MDL4', precio: 10, descripcion: 'rojo', caracteristicas: 'Potente secador de cabello de 2200 vatios', cantidad: 8 },
  {id:5, img:'/assets/img/imgcards/5.png', nombre: 'Secadores de pelo', modelo: 'MDL5', precio: 8, descripcion: 'rojo', caracteristicas: 'Potente secador de cabello de 2200 vatios', cantidad: 8 },
  {id:6, img:'/assets/img/imgcards/6.png', nombre: 'Plancha', modelo: 'MDL6', precio: 35, descripcion: 'rojo', caracteristicas: 'Potente secador de cabello de 2200 vatios', cantidad: 8 },

]


 interface Tabla {
   nombre: string;
   fecha: string;
   descripcion: string;
   producto: any;
   cantidad: number;
   persona: string;
}

export const Ventas: Tabla[] = [
  {nombre: 'VNT1', descripcion: 'DSC1', fecha: '01/01/2021', producto: 'PRODUCT 1', cantidad: 1, persona: 'Anna'},
  {nombre: 'VNT2', descripcion: 'DSC2', fecha: '02/01/2021', producto: 'PRODUCT 2', cantidad: 2, persona: 'Anna'},
  {nombre: 'VNT3', descripcion: 'DSC3', fecha: '03/01/2021', producto: 'PRODUCT 3', cantidad: 3, persona: 'Anna'},
  {nombre: 'VNT4', descripcion: 'DSC4', fecha: '04/01/2021', producto: 'PRODUCT 4', cantidad: 4, persona: 'Anna'},
  {nombre: 'VNT5', descripcion: 'DSC5', fecha: '05/01/2021', producto: 'PRODUCT 5', cantidad: 5, persona: 'Anna'},
  {nombre: 'VNT6', descripcion: 'DSC6', fecha: '06/01/2021', producto: 'PRODUCT 6', cantidad: 6, persona: 'Anna'},
  {nombre: 'VNT7', descripcion: 'DSC7', fecha: '07/01/2021', producto: 'PRODUCT 7', cantidad: 7, persona: 'Anna'},
  {nombre: 'VNT8', descripcion: 'DSC8', fecha: '08/01/2021', producto: 'PRODUCT 8', cantidad: 8, persona: 'Anna'},
  {nombre: 'VNT9', descripcion: 'DSC9', fecha: '09/01/2021', producto: 'PRODUCT 9', cantidad: 9, persona: 'Anna'},
  {nombre: 'VNT10',descripcion: 'DSC10', fecha: '10/01/2021', producto: 'PRODUCT 10', cantidad: 10, persona: 'Anna'}
]






