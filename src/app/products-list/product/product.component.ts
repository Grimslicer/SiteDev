import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public product: Products;
  public products: Products[] = [];
  public productId: number;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = +params['id']; // Convert the id to a number using the '+' operator
      this.getProduct(this.productId);
    });
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
      console.log('The product is', this.product);
    });
  }

  searchString: string = '';
  searchProducts() {
    this.productService
      .searchProducts(this.searchString)
      .subscribe((data: Products[]) => {
        this.products = data;
        console.log('Search results:', this.products);
      });
  }
}
