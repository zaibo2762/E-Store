import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import computerData from 'C:/Users/zohai/OneDrive/Desktop/Angular/E-Store/src/assets/computer.json'

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
export class ComputersComponent {
 computers:Computers[] = computerData;
 
}
