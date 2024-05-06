import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import tabData from 'C:/Users/zohai/OneDrive/Desktop/Angular/E-Store/src/assets/tablets.json'



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
export class TabletsComponent {
  tabs:Tabs[] = tabData;
}
