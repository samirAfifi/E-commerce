import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
 @Input() productData:any
 @Output() addToCART = new EventEmitter();
 addBtn:boolean=false;
 quantity:number=0;

  constructor() { }

  add(){
    this.addToCART.emit({item:this.productData,quantity:this.quantity})

  }

}
