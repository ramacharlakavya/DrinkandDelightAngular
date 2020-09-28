import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public allchec: boolean=false;
 public userid: number;

  constructor(private httpService: HttpClient) { }


  public updateProduct(updateProduct: ProductStock) {
    console.log("ins service update");
    console.log(updateProduct);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7006/productstock/exitdate", updateProduct,  { headers, responseType: 'text'});
  }

  public updateRawmaterial(updateRawmaterial: RawMaterialStock) {
    console.log("ins service update");
    console.log(updateRawmaterial);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:4564/rawmaterialstock/exitdate", updateRawmaterial,  { headers, responseType: 'text'});
  }
  public getProduct(id:number) {
    console.log("ins service get product");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<ProductStock>("http://localhost:4560/productstock/getOrder/"+id);
  }
  public getRawmaterial(id:number) {
    console.log("ins service get rawmaterial");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<RawMaterialStock>("http://localhost:7007/rawmaterial/getOrder/"+id);
  }

}
export class ProductStock
{
    orderId:number;
    name:string;
    deliveryDate:Date;
    exitDate:Date;
    expiryDate:Date;
    manufacturingDate:Date;
    price:number;
    pricePerUnit:number;
    qualityCheck:string;
    quantityUnit:number;
    quantityValue:number;
    
   
    warehouseId:String;
    
   
    
    
    
}
export class RawMaterialStock
{
    orderId:number;
    name:string;
    pricePerUnit:number;
    quantityValue:number;
    quantityUnit:number;
    price:number;
    warehouseId:string;
    deliveryDate:Date;
    manufacturingDate:Date;
    expiryDate:Date;
    qualityCheck:string;
    processDate:Date;
}
