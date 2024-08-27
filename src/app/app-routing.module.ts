import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/component/products-details/products-details.component';
import { CartsComponent } from './cart/component/carts/carts.component';

const routes: Routes = [
  
  {path:'products',component:AllProductsComponent},
  {path:'details/:id',component:ProductsDetailsComponent},
  {path:'cart',component:CartsComponent},
  {path:'**',component:AllProductsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
