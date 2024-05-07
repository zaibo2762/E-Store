import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import tabData from '../../../assets/tablets.json'
import { Products } from '../../interface/products';



interface Tabs {
  id:number,
  name:string,
  category:string,
  imgurl:string,
  descp:string,
  price:string
}
@Component({
  selector: 'app-tablets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tablets.component.html',
  styleUrl: './tablets.component.css'
})
export class TabletsComponent implements OnInit{
  tabs:Tabs[] = tabData;
  constructor(private cartService : CartService){}
  ngOnInit(): void {
    
  } 
  
  onAddToCart(product: Products): void {
   this.cartService.addToCart(product); 
   
 }
}
