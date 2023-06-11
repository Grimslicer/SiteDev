import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItems, Products } from '../models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cart: CartService) {}

  items: CartItems;
  products: Products[] = [];

  ngOnInit(): void {
    this.items = this.cart.getItems();
    this.products = this.items.products;
    console.log('The items inside my cart', this.items);
    console.log('The products are', this.products);
  }

  removeProdCart(product: Products, i: number) {
    const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
      console.log('this items are', this.items);
      this.cart.removeItemFromLocalStorage(i);
    }
  }

  addQTA(product: Products) {
    if (product.qta_cart) {
      product.qta_cart = product.qta_cart + 1;
      this.cart.saveItemToLocalStorage(product);
    }
  }

  decreaseQTA(product: Products) {
    if (product.qta_cart) {
      product.qta_cart = product.qta_cart - 1;
    }
  }
}
