import { Component, OnInit } from '@angular/core';
import { MyserviceService, ProductStock } from '../myservice.service';


@Component({
  selector: 'stock-management',//app-productstock
  templateUrl: './productstock.component.html',
  styleUrls: ['./productstock.component.css']
})
export class ProductStockComponent implements OnInit {
product: ProductStock;
  constructor(private myservice: MyserviceService){}

   ngOnInit()
   {
      
   }
   onSubmit(id):any{
    console.log(id);
     this.myservice.getProduct(id).subscribe(data => {
      this.product=data});
  
  }
}