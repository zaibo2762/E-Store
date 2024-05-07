import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComputersComponent } from './components/computers/computers.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { TabletsComponent } from './components/tablets/tablets.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    
    {
        path:"computer",
        component:ComputersComponent
    },
    {
        path:"laptop",
        component:LaptopsComponent
    },
    {
        path:"mobile",
        component:MobilesComponent
    },
    {
        path:"tablets",
        component:TabletsComponent
    },
    {
        path:"item",
        component:ItemViewComponent
    },
    {
        path:"cart",
        component:CartComponent
    },

];
