import { Component, OnInit, Input } from '@angular/core';
import { AccountInfo } from '../AccountInfo';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
    @Input() accountInfo : AccountInfo;
    showAccountInfo: boolean;
  constructor() { }

  ngOnInit() {
    this.showAccountInfo = false;
    if(this.accountInfo == undefined){
      this.accountInfo = new AccountInfo();
      this.accountInfo.name = "Indira";
      this.accountInfo.emailId = "Indira.Raghavan@Staples.ca";
      this.accountInfo.dateOfBirth = "16-11-1986";
    }
  }

  showAccountInfoClicked(){
    if(this.showAccountInfo == false){
      this.showAccountInfo = true;
    }
    else{
      this.showAccountInfo = false;
    }
  }
}
