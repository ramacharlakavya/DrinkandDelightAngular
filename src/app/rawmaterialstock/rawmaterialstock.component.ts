import { Component, OnInit } from '@angular/core';
import { MyserviceService, RawMaterialStock } from '../myservice.service';

@Component({
  selector:  'rmstock-management', //'app-rawmaterialstock',
  templateUrl: './rawmaterialstock.component.html',
 // styleUrls: ['./rawmaterialstock.component.css']
})
export class RawMaterialStockComponent implements OnInit {

  rawmaterial: RawMaterialStock;
  constructor(private myservice: MyserviceService){}

   ngOnInit()
   {
      
   }
   onSubmit(id):any{
    console.log(id);
     this.myservice.getRawmaterial(id).subscribe(data => {
      this.rawmaterial=data});
  
  }
}
