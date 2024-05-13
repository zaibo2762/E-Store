import { Component } from '@angular/core';
import { Products } from '../../interface/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.css'
})
export class ItemViewComponent {
  computer: Products | null = null; // Single product object or null
  computers: Products[] = []  ; // Array of product objects
 
  
  constructor(
    private route: ActivatedRoute,
    private cartService : CartService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id')!; // Get ID from route parameter

        // Find the selected computer by ID in your local data
        this.computer = this.computers.find(computer => computer.id === id) || null;

        // If no computer found, set it to null explicitly
        if (!this.computer) {
          this.computer = null;
        }
      });
  }
  onAddToCart(product: Products): void {
    this.cartService.addToCart(product); 
    
  }
}
