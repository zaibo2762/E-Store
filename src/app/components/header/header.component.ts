import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Fetch initial cart item count
    this.cartItemCount = this.cartService.getCartItems().length;

    // Subscribe to cart item changes
    this.cartService.cartUpdated.subscribe(() => {
      this.cartItemCount = this.cartService.getCartItems().length;
    });
  }

}
