import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Products[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); 
    this.calculateTotalPrice();
  }
  removeFromCart(product: Products): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice(); // Recalculate total after removal
    }
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + (parseInt(item.price)  || 1), 0); // Consider quantity (if defined)
  }
  

}
