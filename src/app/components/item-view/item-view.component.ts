import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.css'
})
export class ItemViewComponent implements OnInit {
  item: any;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService,
    private cartService : CartService
  ) {}
  addToCart(item: Products) {
    this.cartService.addToCart(item);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const itemId = +params['id'];
      this.fetchItemDetails(itemId);
    });
  }

  fetchItemDetails(itemId: number) {
    this.productservice.getItemById(itemId).subscribe(
      (data: any) => {
        this.item = data; // Assuming your API returns the item details
      },
      error => {
        console.error('Error fetching item details:', error);
      }
    );
  }
}
