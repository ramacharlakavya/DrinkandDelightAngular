import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductStockComponent } from './productstock/productstock.component';
import { RawMaterialStockComponent } from './rawmaterialstock/rawmaterialstock.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { RawmaterialProcessDateComponent } from './rawmaterial-process-date/rawmaterial-process-date.component';
//import { ProductExitDateComponent } from './product-exit-date/product-exit-date.component';
import { RawmaterialUpdateComponent } from './rawmaterial-update/rawmaterial-update.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductStockComponent,
    RawMaterialStockComponent,
    //RawmaterialProcessDateComponent,
  //  ProductExitDateComponent,
    RawmaterialUpdateComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [HttpClient,MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

