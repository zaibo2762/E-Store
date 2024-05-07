import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import mobileData from '../../../assets/mobiles.json'
import { Products } from '../../interface/products';



interface Mobiles {
  id:number,
  name:string,
  category:string,
  imgurl:string,
  descp:string,
  price:string
}
@Component({
  selector: 'app-mobiles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css'
})
export class MobilesComponent implements OnInit{
  mobiles:Mobiles[] = mobileData;
  constructor(private cartService : CartService){}
  ngOnInit(): void {
    
  } 
  
  onAddToCart(product: Products): void {
   this.cartService.addToCart(product); 
   
 }
}

