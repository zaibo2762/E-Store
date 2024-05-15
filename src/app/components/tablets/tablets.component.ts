import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

import { Products } from '../../interface/products';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-tablets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tablets.component.html',
  styleUrl: './tablets.component.css'
})
export class TabletsComponent implements OnInit{
  tabs:Products[] = []
  constructor(private cartService : CartService,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.http.get<Products[]>('https://localhost:7021/api/Product?category=tablet').subscribe(data => {
      this.tabs= data;
     })
  } 
  viewItem(itemId: number) {
    this.router.navigate(['/view', itemId]);
  }
  onAddToCart(product: Products): void {
   this.cartService.addToCart(product); 
   
 }
}
