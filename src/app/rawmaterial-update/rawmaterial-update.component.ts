import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-rawmaterial-update',
  templateUrl: './rawmaterial-update.component.html',
  styleUrls: ['./rawmaterial-update.component.css']
})
export class RawmaterialUpdateComponent implements OnInit {
message: any;
  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
  }
  updatedata(rawmaterial)
  {
    this.service.updateRawmaterial(rawmaterial).subscribe((data)=>{ 
      this.message = data
    });
      if(this.message!="Updated successfully")
      alert("Data Updated Succesfully");
      else
      alert("Data not Updated Succesfully. Please Provide Valid Order ID");
  
  
  }
}
