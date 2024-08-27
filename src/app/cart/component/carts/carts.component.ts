import { Component, OnInit } from '@angular/core';
import { CartsService } from './../../serves/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  cartProducts:any
  total:any=0
  success:boolean=false
  constructor(private _CartsService: CartsService ) { }
  ngOnInit(): void {
    this.getCartProducts()
    
  }
  getCartProducts(){
    if(localStorage.getItem('product')){
      this.cartProducts = JSON.parse(localStorage.getItem('product')!)
    }

    this.getCartTotalPrice()
  }

  getCartTotalPrice(){
    this.total=0;
    for(let i=0;i<this.cartProducts.length;i++){
      this.total+=this.cartProducts[i].item.price * this.cartProducts[i].quantity
    }
  }

  minsControl(product:any){
    if(product.quantity>1){
      product.quantity--
      localStorage.setItem('product',JSON.stringify(this.cartProducts))
      this.getCartTotalPrice()
    }
  }
  detectChange(){
    localStorage.setItem('product',JSON.stringify(this.cartProducts))

  }
  plusControl(product:any){
    product.quantity++
    localStorage.setItem('product',JSON.stringify(this.cartProducts))
    this.getCartTotalPrice()
  }
  deleteProduct(product:any){
    let index=this.cartProducts.findIndex((item:any)=>item.item.id==product.item.id)
    this.cartProducts.splice(index,1)
    localStorage.setItem('product',JSON.stringify(this.cartProducts))
    this.getCartTotalPrice()
  }
  clearCart(){
    this.cartProducts=[]
    localStorage.setItem('product',JSON.stringify(this.cartProducts))
    this.getCartTotalPrice()
    this.getCartProducts()
  }
  addToCart(){
    let product=this.cartProducts.map((item:any)=>{
     return {
        productId:item.item.id,
        quantity:item.quantity
      }
    })
    let model={
      userId:5,
      date:new Date(),
      products:product
    }

    this._CartsService.getNewCart(model).subscribe({
      next: (data) => {
        console.log(data);
        this.success=true
        
      },
      error: (err) => {
        console.log(err);
        
        
      }
    })
    console.log(model);
    
  }


}
