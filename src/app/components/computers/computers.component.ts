import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Products } from '../../interface/products';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-computers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './computers.component.html',
  styleUrl: './computers.component.css'
})
export class ComputersComponent implements OnInit {
 computers:Products[] = [];
 onAddToCart(product: Products): void {
  this.cartService.addToCart(product); 
  
}
 @Output() viewComputer = new EventEmitter<Products>();
 
  onSelectComputer(computer: Products) {
    this.router.navigate(['/computers', computer.id]);
    
  }
 constructor(private cartService : CartService,private router:Router, private http : HttpClient){}
 ngOnInit(): void {
   this.http.get<Products[]>('https://localhost:7021/api/Product?category=computer').subscribe(data => {
    this.computers= data;
   })
 } 
 
 
}
