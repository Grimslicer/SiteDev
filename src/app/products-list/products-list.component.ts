import { Component } from '@angular/core';
import { Products } from '../models/products.model';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  public products: Products[] = [];
  searchString: string = '';

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      this.products = this.products.filter((product) => product.id !== 29);
      console.log('The products are', this.products);
    });
  }

  id: number;
  goToProduct(id: number) {
    this.id = id;
    this.router.navigate(['/products', id]);
  }

  searchProducts() {
    this.productService
      .searchProducts(this.searchString)
      .subscribe((data: any) => {
        this.products = data.products;
        console.log('Search results:', this.products);
      });
  }

  spliceTheArray() {
    this.products = this.products.filter((product) => product.id !== 29);
  }

  onKeyUp(event: any) {
    if (event.key === 'Enter') {
      this.searchProducts();
    }
  }
}
