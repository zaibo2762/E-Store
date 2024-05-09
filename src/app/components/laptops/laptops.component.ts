import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import laptopData from '../../../assets/laptop.json'
import { Products } from '../../interface/products';


interface Laptops {
  id:number,
  name:string,
  category:string,
  imgurl:string,
  descp:string,
  price:string
}
@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent  implements OnInit{
  laptops:Laptops[] = laptopData;
  constructor(private cartService : CartService,private router:Router){}
  ngOnInit(): void {
    
  } 
  @Output() viewComputer = new EventEmitter<Laptops>();

  onSelectComputer(computer: Laptops) {
    this.router.navigate(['/computers', computer.id]);
  }
  onAddToCart(product: Products): void {
   this.cartService.addToCart(product); 
   
 }
}
