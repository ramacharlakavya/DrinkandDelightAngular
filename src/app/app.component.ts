import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductStockComponent } from './productstock/productstock.component';
import { RawMaterialStockComponent } from './rawmaterialstock/rawmaterialstock.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrinkDelightSM'; //inventoryms
}
export const routes:Routes=[{ path:'productstock', component:ProductStockComponent },
{ path:'rawmaterialstock', component:RawMaterialStockComponent }
]
