import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-edit',
  templateUrl: './quantity-edit.component.html',
  styleUrls: ['./quantity-edit.component.css'],
  styles:['./quantity-edit.component.css']
})
export class QuantityEditComponent implements OnInit {
    quantityMin: number;
    quantityMax: number;
    quantity: number;

    @Input() currentQuantity: number;
    
    @Output('onQuantityChangeEvent') onQuantityChangeEvent = new EventEmitter<number>();

  constructor() { 
    this.quantityMin = 0;
        this.quantityMax = 1000;
        this.quantity = this.quantityMin; 
  }

  ngOnInit() {
  }

  increaseQuantity() {
    if (this.quantity == undefined || this.quantity == null || this.quantity == NaN) {
        this.quantity = this.quantityMin;
        return;
    }

    if (this.quantity >= this.quantityMax) {            
        this.quantity = this.quantityMax;
        return;
    }

    if (this.quantity < this.quantityMin) {            
        this.quantity = this.quantityMin;
        return;
    }

    this.quantity++;
    this.updateQuantities();
    return;
}

updateQuantities() {        
    this.onQuantityChangeEvent.emit(this.quantity);
}

//decrease quantity by 1 untill min quantity
decreaseQuantity() {
    if (this.quantity == undefined || this.quantity == null || this.quantity == NaN) {
        this.quantity = this.quantityMax;
        return;
    }

    if (this.quantity <= this.quantityMin) {            
        this.quantity = this.quantityMin;
        return;
    }

    if (this.quantity > this.quantityMax) {            
        this.quantity = this.quantityMax;
        return;
    }

    this.quantity--;    
    this.updateQuantities();    
    return;
}

//set quantity
setQuantity(newQuantity: number) {
    this.quantity = newQuantity;
    this.updateQuantities();
    return;
}

}
