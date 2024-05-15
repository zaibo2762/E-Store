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

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  ngOnInit(): void {
    
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  

}
