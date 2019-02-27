import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-card',
  templateUrl: './social-media-card.component.html',
  styleUrls: ['./social-media-card.component.css'],
  styles: ['./social-media-card.component.css']
})
export class SocialMediaCardComponent implements OnInit {  
  socialMediaNames : string[] = new Array();
  @Input() buttonColor: string;
  @Input() backgroundColor: string;
  constructor() { 
    this.socialMediaNames.push("My Computer");
    this.socialMediaNames.push("Facebook");
    this.socialMediaNames.push("Instagram");
    this.socialMediaNames.push("Google Photos");
  }  

  ngOnInit() {

  }

  getNames(){
    return this.socialMediaNames;
  }

  setBackgroundStyle(){
    let styles = {
      'background-color': this.backgroundColor          
    };
  return styles;
  }

  setButtonStyle(){
    let styles = {
      'background-color': this.buttonColor          
    };
  return styles;
  }

}
