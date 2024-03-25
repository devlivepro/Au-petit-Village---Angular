import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './products.service';
import { Products } from './products.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: Products; // Utilisez l'interface Product pour typer la propriété product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Récupérez les informations du produit depuis l'état de la navigation
    this.products = history.state.product;
  }

  goBack() {
    this.router.navigate(['/']); // Rediriger vers la page précédente (peut-être la page d'accueil)
  }
}
