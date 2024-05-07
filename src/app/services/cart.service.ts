import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Products[] = []
  addToCart(product: Products): void {
    this.cartItems.push(product); // Add product to cart
  }

  getCartItems(): Products[] {
    return this.cartItems.slice(); // Return a copy to avoid mutation
  }
  removeFromCart(product: Products): void {
    const index = this.cartItems.findIndex(item => item.id === product.id); // Find item index
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Remove item from cart
    }
  }
  constructor() { }
}
