import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import computerData from '../../../assets/computer.json'
import { Products } from '../../interface/products';

interface Computers {
  id:number,
  name:string,
  category:string,
  imgurl:string,
  descp:string,
  price:string
}
@Component({
  selector: 'app-computers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './computers.component.html',
  styleUrl: './computers.component.css'
})
export class ComputersComponent implements OnInit {
 computers:Computers[] = computerData;

 @Output() viewComputer = new EventEmitter<Computers>();
 
  onSelectComputer(computer: Computers) {
    this.router.navigate(['/computers', computer.id]);
    
  }
 constructor(private cartService : CartService,private router:Router){}
 ngOnInit(): void {
   
 } 
 
 onAddToCart(product: Products): void {
  this.cartService.addToCart(product); 
  
}
}
