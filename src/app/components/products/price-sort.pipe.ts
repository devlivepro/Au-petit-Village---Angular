import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priceSort'
  })
  export class PriceSortPipe implements PipeTransform {
    transform(products: any[], sortBy: 'asc' | 'desc'): any[] {
      if (!products || !Array.isArray(products)) {
        return products;
      }
  
      const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
  
      return sortedProducts;
    }
  }