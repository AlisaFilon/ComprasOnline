import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos, products, images, Img } from "../../db_datos";
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 products = products
images = images
product: Productos | undefined;
displayedImg:  any;
i:any;


  constructor(private route: ActivatedRoute, private carrito:CarritoService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

  }

agregarCarrito(product:any) {
  this.carrito.agregarCarrito(product);
  }


image:any;
Image1(){let img = this.images[0];
             return img.img; }
Image2(){this.image = "https://www.puntronic.com/cdnassets/productos/PHIBHP398_00/EL_PHIBHP398_00-02.jpg";}
Image3(){this.image = "https://www.puntronic.com/cdnassets/productos/PHIBHP398_00/EL_PHIBHP398_00-03.jpg";}


}


