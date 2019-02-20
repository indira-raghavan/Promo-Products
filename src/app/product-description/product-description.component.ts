import { Component, OnInit, Input } from '@angular/core';
import { PromoProduct } from '../promo-product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() promoProduct: PromoProduct
  constructor() { }

  ngOnInit() {    
  }

  getPromoProductName(){
    if(this.promoProduct == undefined){
      return "Promotional Grocery Tote";
    }

    return this.promoProduct.name;
  }

}
