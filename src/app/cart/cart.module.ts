import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './component/carts/carts.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
   
    SharedModule,
    FormsModule

  ],
  exports: [
    CartsComponent
  ]
})
export class CartModule { }
