import { EventEmitter, Injectable } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  addToCartEvent: EventEmitter<Products> = new EventEmitter<Products>();

  items: Products[] = [];

  constructor() {
    this.loadItemsFromLocalStorage();
  }

  addToCart(product: Products) {
    console.log(typeof this.items);
    const existingProductIndex = this.items.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update the quantity
      const existingProduct = this.items[existingProductIndex];
      if (existingProduct.qta_cart) {
        existingProduct.qta_cart += 1;
      } else {
        existingProduct.qta_cart = 1;
      }
    } else {
      // Product does not exist in the cart, push a new product
      product.qta_cart = 1;
      this.items.push(product);
    }

    this.saveItemsToLocalStorage();
    console.log('Items are:', this.items);
  }

  getItems() {
    return this.items;
  }

  private loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      try {
        this.items = JSON.parse(storedItems);
        if (!Array.isArray(this.items)) {
          this.items = [];
        }
      } catch (error) {
        console.error('Error parsing stored items:', error);
        this.items = [];
      }
    }
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  private removeItemsFromLocalStorage() {
    localStorage.removeItem('cartItems');
  }

  clearCart() {
    this.items = [];
    this.removeItemsFromLocalStorage();
    return this.items;
  }
}
