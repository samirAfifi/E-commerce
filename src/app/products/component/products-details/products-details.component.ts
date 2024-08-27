import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../serves/product.service';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
data:any={};
isloading:boolean=false
  constructor(private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.id =this._activatedRoute.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.getcart()
    
  }
  getcart(){
    this.isloading=true
    this._productService.getCartById(this.id).subscribe({
      next: (res)=>{
        console.log(res);

        this.isloading=false

        this.data=res
      }
    })
  }

}
