import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../serves/product.service';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productList:any;
  categoriesList:any;
  isLoading:boolean=true
  productData:any=[];
  constructor(private _productService: ProductService) { }


  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory()
  }

  getAllProducts(){
    this.isLoading=true
    this._productService. getAllProduct().subscribe({
      next: (data) => {
        this.isLoading=false
        console.log(data);
        this.productList = data
      },
      error: (err) => {
        this.isLoading=false
        console.log(err);
      }
    })
  };
  getAllCategory(){
    this.isLoading=true
    this._productService. getAllCategory().subscribe({
      next: (data) => {
        this.isLoading=false
        console.log(data);
        this.categoriesList = data
      },
      error: (err) => {
        this.isLoading=false
        console.log(err);
      }
    })
  };

  filterByCategory(keyWord:any){
    let event=keyWord.target.value
    event=='all'?this.getAllProducts():this.getProductsByCategory(event)
    console.log(event);
  }
  getProductsByCategory(keyWord:any){
    this._productService. getAllProductsByCategory(keyWord).subscribe({
      next: (data) => {
        console.log(data);
        this.productList = data
      },
      error: (err) => {
        console.log(err);
      }
    })
  };

  addToCart(product:any){
    if(localStorage.getItem('product')){
      this.productData=JSON.parse(localStorage.getItem('product')!)
      let index=this.productData.find((item:any)=>item.item.id==product.item.id)
      if(index){
        alert('product is already added to cart')
      }else{
        this.productData.push(product)
        localStorage.setItem('product',JSON.stringify(this.productData))
        
      }
    
    }else{
      this.productData.push(product)
      localStorage.setItem('product',JSON.stringify([product]))

    }
    
  }


}
