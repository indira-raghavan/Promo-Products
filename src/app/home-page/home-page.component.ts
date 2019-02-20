import { Component, OnInit, Input } from '@angular/core';
import { PromoProduct } from '../promo-product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  styles: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Promo Products';  
  @Input() public promoProduct = new PromoProduct;
  constructor() { }

  ngOnInit() {
    this.promoProduct = new PromoProduct();
    this.promoProduct.name = "Promotional Grocery Tote";
    this.promoProduct.image = "/assets/PromotionalGroceryTote-Black_0.jpg";
  }

  getPromoProductName(){
    if(this.promoProduct == undefined){
      return "Promotional Grocery Tote";      
    }

    return this.promoProduct.name;
  }

}
