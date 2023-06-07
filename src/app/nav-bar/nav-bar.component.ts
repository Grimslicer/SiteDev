import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/products.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router, private cart: CartService) {}

  items: Products[] = [];
  ngOnInit(): void {
    this.cart.addToCartEvent.subscribe((product: Products[]) => {
      this.items = this.cart.getItems();
      console.log('The items inside my cart in the navbar are', this.items);
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
