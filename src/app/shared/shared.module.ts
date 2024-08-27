import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SeletComponent } from './Components/selet/selet.component';
import { ProductItemsComponent } from './Components/product-items/product-items.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SeletComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SeletComponent,
    ProductItemsComponent,
  
  ]
})
export class SharedModule { }
