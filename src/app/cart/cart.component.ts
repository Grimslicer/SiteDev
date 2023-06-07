import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cart: CartService) {}

  items: Products[] = [];
  ngOnInit(): void {
    this.cart.addToCartEvent.subscribe((product: Products[]) => {
      this.items = this.cart.getItems();
      console.log('The items inside my cart', this.items);
    });
    this.items = this.cart.getItems();
  }

  removeProdCart(product: Products) {
    const index = this.items.indexOf(product, 0);
    if (index > -1) {
      this.items.splice(index, 1);
      console.log('this items are', this.items);
      // this.cart.removeItemFromLocalStorage(product);
    }
  }

  addQTA(product: Products, i: number) {
    if (product.qta_cart) {
      product.qta_cart = product.qta_cart + 1;
    }
  }
}
