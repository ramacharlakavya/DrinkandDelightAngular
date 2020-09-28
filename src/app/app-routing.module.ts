import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductStockComponent } from './productstock/productstock.component';
import { RawMaterialStockComponent } from './rawmaterialstock/rawmaterialstock.component';
//import {  RawmaterialProcessDateComponent } from './rawmaterial-process-date/rawmaterial-process-date.component';
import {RawmaterialUpdateComponent} from './rawmaterial-update/rawmaterial-update.component';
//import {  ProductExitDateComponent } from './product-exit-date/product-exit-date.component';
import { ProductUpdateComponent} from './product-update/product-update.component';
import { AppComponent } from './app.component';
const routes: Routes = [
 
  
  { path:'productstock', component:ProductStockComponent },
  { path:'rawmaterialstock', component:RawMaterialStockComponent },
//{path : 'rawmaterialprocessdate',component:RawmaterialProcessDateComponent},
{path : 'rawmaterialupdate',component:RawmaterialUpdateComponent},
//{path :'productexitdate',component:ProductExitDateComponent},
{path : 'productupdate',component:ProductUpdateComponent},
  ];   
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  ProductStockComponent,
  RawMaterialStockComponent,
 // RawmaterialProcessDateComponent,
  RawmaterialUpdateComponent,
  //ProductExitDateComponent,
  ProductUpdateComponent
]
