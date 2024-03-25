import { Component } from '@angular/core';
import { ProductService } from '../products/products.service';
import { Products } from '../products/products.model'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchTerm: string = ''; // Inialisez la recherche

  sortBy: 'asc' | 'desc' = 'asc'; // Initialisez la propriété sortBy

  products: Products[] = []; // Initialisez le tableau products

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Récupérez les produits depuis le service
    this.productService.getProducts().subscribe((data: Products[]) => {
      // Une fois les produits récupérés, affectez les deux premiers produits à la variable products
      this.products = data.slice(0, 3);
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
