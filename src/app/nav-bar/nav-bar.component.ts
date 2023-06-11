import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems, Products } from '../models/products.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router, private cart: CartService) {}

  items: CartItems;
  products: Products[] = [];

  ngOnInit(): void {
    this.cart.loadItemsFromLocalStorage();
    this.items = this.cart.getItems(); // Assign the value of items

    this.products = this.items.products; // Ensure items are loaded from localStorage
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
