import { Component, OnInit } from '@angular/core';

 export interface Productos {
  img:any;
  nombre: string;
  modelo: string;
  precio: number;
  }

export const cards: Productos[]  = [
  {img:'/assets/img/imgcards/1.png', nombre: 'Secadores de pelo', modelo: 'MDL1', precio: 15},
  {img:'/assets/img/imgcards/2.png', nombre: 'Cepillo electrico', modelo: 'MDL2', precio: 20},
  {img:'/assets/img/imgcards/3.png', nombre: 'Plancha', modelo: 'MDL3', precio: 25},
  {img:'/assets/img/imgcards/4.png', nombre: 'Campana secador', modelo: 'MDL4', precio: 10},
  {img:'/assets/img/imgcards/5.png', nombre: 'Secadores de pelo', modelo: 'MDL5', precio: 8},
  {img:'/assets/img/imgcards/6.png', nombre: 'Plancha', modelo: 'MDL6', precio: 35}
]

 interface Tabla {
   nombre: string;
   fecha:string;
   descripcion: string;
   //producto:string;
   //cantidad:number;
   //persona:string;
}

export const Ventas: Tabla[] = [
  {nombre: 'VNT1', descripcion: 'DSC1', fecha: '01/01/2021'},
  {nombre: 'VNT2', descripcion: 'DSC2', fecha: '02/01/2021'},
  {nombre: 'VNT3', descripcion: 'DSC3', fecha: '03/01/2021'},
  {nombre: 'VNT4', descripcion: 'DSC4', fecha: '04/01/2021'},
  {nombre: 'VNT5', descripcion: 'DSC5', fecha: '05/01/2021'},
  {nombre: 'VNT6', descripcion: 'DSC6', fecha: '06/01/2021'},
  {nombre: 'VNT7', descripcion: 'DSC7', fecha: '07/01/2021'},
  {nombre: 'VNT8', descripcion: 'DSC8', fecha: '08/01/2021'},
  {nombre: 'VNT9', descripcion: 'DSC9', fecha: '09/01/2021'},
  {nombre: 'VNT10',descripcion: 'DSC10', fecha: '10/01/2021'}
]


/*
function totalVentas(){
return Ventas.length;
};
console.log (totalVentas()); */

interface Detalles {
  img:any;
  nombre: string;
  precio:number;
  modelo: any;
  caracteristicas: any;

  }

export const dets: Detalles[] = [
  { img:'/assets/img/imgcards/1.png', nombre: 'Secadores de pelo', precio: 15, modelo: 'MDL1', caracteristicas: 'Potente secador de cabello de 2200 vatios' },
  { img:'/assets/img/imgcards/2.png', nombre: 'Cepillo electrico', precio: 20, modelo: 'MDL2', caracteristicas: 'Potente secador de cabello de 2200 vatios' },
  { img:'/assets/img/imgcards/3.png', nombre: 'Plancha', precio: 25, modelo: 'MDL3', caracteristicas: 'Potente secador de cabello de 2200 vatios' },
  { img:'/assets/img/imgcards/4.png', nombre: 'Campana secador', precio: 30, modelo: 'MDL4', caracteristicas: 'Potente secador de cabello de 2200 vatios' },
  { img:'/assets/img/imgcards/5.png', nombre: 'Secadores de pelo', precio: 35, modelo: 'MDL5', caracteristicas: 'Potente secador de cabello de 2200 vatios' },
  { img:'/assets/img/imgcards/6.png', nombre: 'Plancha', precio: 33, modelo: 'MDL6', caracteristicas: 'Potente secador de cabello de 2200 vatios' }
]


