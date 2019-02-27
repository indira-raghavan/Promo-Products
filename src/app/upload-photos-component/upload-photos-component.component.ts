import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-photos-component',
  templateUrl: './upload-photos-component.component.html',
  styleUrls: ['./upload-photos-component.component.css'],
  styles: ['./upload-photos-component.component.css']
})
export class UploadPhotosComponentComponent implements OnInit {
  showUploadPhotoComponent : boolean;
  constructor() { 
    this.showUploadPhotoComponent = false;
  }

  ngOnInit() {
  }

  showUploadPhotoComponentClicked(){
    if(this.showUploadPhotoComponent == false){
      this.showUploadPhotoComponent = true;
    }
    else{
      this.showUploadPhotoComponent = false;
    }
  }
}
