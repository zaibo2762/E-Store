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
 
 constructor(private cartService : CartService,private router:Router, private http : HttpClient){}
 addToCart(item: Products) {
   this.cartService.addToCart(item);
 }



 
 

 viewItem(itemId: number) {
   this.router.navigate(['/view', itemId]);
 }
 ngOnInit(): void {
   this.http.get<Products[]>('https://localhost:7021/api/Product?category=computer').subscribe(data => {
    this.computers= data;
   })
 } 
 
 
}
