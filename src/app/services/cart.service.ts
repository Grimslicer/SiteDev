import { EventEmitter, Injectable } from '@angular/core';
import { CartItems, Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItems = { products: [] };
  addToCartEvent: EventEmitter<Products> = new EventEmitter<Products>();

  constructor() {
    this.loadItemsFromLocalStorage();
  }

  addToCart(product: Products) {
    const existingProductIndex = this.items.products.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update the quantity
      const existingProduct = this.items.products[existingProductIndex];
      if (existingProduct.qta_cart) {
        existingProduct.qta_cart += 1;
      } else {
        existingProduct.qta_cart = 1;
      }
    } else {
      // Product does not exist in the cart, push a new product
      product.qta_cart = 1;
      this.items.products.push(product);
    }

    this.saveItemsToLocalStorage();
  }

  getItems(): CartItems {
    return this.items;
  }

  public loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      try {
        this.items = JSON.parse(storedItems);
        if (!Array.isArray(this.items.products)) {
          this.items.products = [];
        }
      } catch (error) {
        console.error('Error parsing stored items:', error);
        this.items.products = [];
      }
    }
  }

  private saveItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  public saveItemToLocalStorage(product: Products) {
    const storedItems = localStorage.getItem('cartItems');
    const items = storedItems ? JSON.parse(storedItems) : { products: [] };
    items.products.push(product);

    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  public removeItemsFromLocalStorage() {
    localStorage.removeItem('cartItems');
  }

  public removeItemFromLocalStorage(product_index: number) {
    const storedItems = localStorage.getItem('cartItems');
    const items = storedItems ? JSON.parse(storedItems) : { products: [] };

    items.products.splice(product_index, 1);

    localStorage.setItem('cartItems', JSON.stringify(items));
  }
}
