import { Injectable } from '@angular/core';
import { Products } from '../interface/products';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Products[] = [];
  cartUpdated = new Subject<void>();
  constructor() {
    // Load cart items from local storage if available
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }
  private saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(item: Products) {
    this.cartItems.push(item);
    this.saveCartItems();
    this.cartUpdated.next();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCartItems();
    this.cartUpdated.next();
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + parseInt(item.price), 0);
  }
  
}
