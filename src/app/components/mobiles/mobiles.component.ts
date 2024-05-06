import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import mobileData from 'C:/Users/zohai/OneDrive/Desktop/Angular/E-Store/src/assets/mobiles.json'



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
export class MobilesComponent {
  mobiles:Mobiles[] = mobileData;
}
