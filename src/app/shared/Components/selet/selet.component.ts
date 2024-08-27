import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selet',
  templateUrl: './selet.component.html',
  styleUrls: ['./selet.component.css']
})
export class SeletComponent {
 @Input() data:any
 @Output() seletedValue = new EventEmitter()
 constructor(){}

 delterByCategory(event:any){

  this.seletedValue.emit(event)

 }

}
