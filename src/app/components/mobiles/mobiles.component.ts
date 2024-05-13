import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Products } from '../../interface/products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mobiles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css'
})
export class MobilesComponent implements OnInit{
  mobiles:Products[] = [];
  constructor(private cartService : CartService, private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<Products[]>('https://localhost:7021/api/Product?category=mobile').subscribe(data => {
      this.mobiles= data;
     })
  } 
  
  onAddToCart(product: Products): void {
   this.cartService.addToCart(product); 
   
 }
}

