import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  message: any;

  constructor(private productService: MyserviceService) { }

  ngOnInit(): void {
  }

  updateproduct(product):any
{


this.productService.updateProduct(product).subscribe((data)=>{ 
  this.message = data
});
  if(this.message=="Updated successfully")
    alert("Data Updated Succesfully");
    else
    alert("Data not Updated Succesfully. Please Provide Valid Order ID");
  
}




}

