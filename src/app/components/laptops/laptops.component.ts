import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import laptopData from 'C:/Users/zohai/OneDrive/Desktop/Angular/E-Store/src/assets/laptop.json'


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
export class LaptopsComponent {
  laptops:Laptops[] = laptopData;
 
}
