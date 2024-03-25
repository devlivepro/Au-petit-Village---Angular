import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../products/products.service';
import { Products } from '../products/products.model';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Modifiez 'styleUrl' en 'styleUrls'
})
export class HomeComponent {
  searchTerm: string = ''; 
  sortBy: 'asc' | 'desc' = 'asc'; 
  products: Products[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  viewProductDetails(product: Products) {
    this.router.navigate(['/products'], { state: { product: product } });
  }

  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}