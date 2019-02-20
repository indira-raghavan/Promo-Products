import { Component, OnInit, Input } from '@angular/core';
import { PromoProduct } from '../promo-product';
import { AccountInfo } from '../AccountInfo';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css']
})
export class ProductBuilderComponent implements OnInit {
  @Input() promoProduct : PromoProduct

  accountInfo: AccountInfo;
  showAccountInfoComponent: boolean;

  constructor() { }

  ngOnInit() {
    if(this.accountInfo == undefined){
      this.accountInfo = new AccountInfo();
      this.accountInfo.name = "Indira";
      this.accountInfo.emailId = "Indira.Raghavan@Staples.ca";
      this.accountInfo.dateOfBirth = "16-11-1986";
    }
  } 

}
