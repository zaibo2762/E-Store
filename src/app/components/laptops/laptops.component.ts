import { Component,  OnInit,  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

import { Products } from '../../interface/products';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent  implements OnInit{
  laptops:Products[] = [];
  constructor(private cartService : CartService,private router:Router, private http:HttpClient, ){}
  ngOnInit(): void {
    this.http.get<Products[]>('https://localhost:7021/api/Product?category=laptop').subscribe(data => {
      this.laptops= data;
     })
  } 
  
  viewItem(itemId: number) {
    this.router.navigate(['/view', itemId]);
  }
 
  onAddToCart(product: Products): void {
   this.cartService.addToCart(product); 
   
 }
}
