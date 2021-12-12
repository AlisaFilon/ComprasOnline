import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-card',
  templateUrl: './detalles-card.component.html',
  styleUrls: ['./detalles-card.component.css']
})
export class DetallesCardComponent implements OnInit {

@Input() det:any;

  constructor() { }

  ngOnInit(): void {
  }

}
