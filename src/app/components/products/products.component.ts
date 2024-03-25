import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Products } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = []; // Utilisez l'interface Product pour typiser la propriété products

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
