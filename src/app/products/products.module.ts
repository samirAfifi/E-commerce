import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule
],
  exports:[
    AllProductsComponent,
    ProductsDetailsComponent
  ]

})
export class ProductsModule { }
