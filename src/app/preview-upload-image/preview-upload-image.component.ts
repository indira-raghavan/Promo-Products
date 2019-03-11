import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-upload-image',
  templateUrl: './preview-upload-image.component.html',
  styleUrls: ['./preview-upload-image.component.css'],
  styles: ['./preview-upload-image.component.css']
})
export class PreviewUploadImageComponent implements OnInit {

  @Input() imageFile: File;

  showUploadedImages: boolean
  constructor() { }

  ngOnInit() {
    this.showUploadedImages = false;
  }

  showUploadedImagesPreview() {
    if(this.showUploadedImages == false) {
        this.showUploadedImages = true;
        let imgDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("divShowUploadedImages");
        let imgFile: File = this.imageFile;
        var imgReader: FileReader;

        
          let imgTag: HTMLImageElement;
          imgFile = this.imageFile;
          imgReader = new FileReader();
          imgReader.onload = ((e) => {
              imgTag = document.createElement("img");

              imgTag.id = "UploadImage" + 0;
              imgTag.alt = "Uploaded Image"+0;
              imgTag.src = e.target['result'];
              setTimeout(() => {                  

                  if (imgTag.naturalWidth >= imgTag.naturalHeight) {
                      imgTag.width = 100;
                      imgTag.height = Math.round(100 * imgTag.naturalHeight / imgTag.naturalWidth);
                  }
                  else {
                      imgTag.height = 100;
                      imgTag.width = Math.round(100 * imgTag.naturalWidth / imgTag.naturalHeight);
                  }                    
              }, 10);
                      
              setTimeout(() => {
                  imgTag.style.margin = "3px";
                  imgDiv.appendChild(imgTag);
              }, 10);                
          });
          imgReader.readAsDataURL(imgFile);      
    }
    else{
      this.showUploadedImages = false;
    } 
}

  uploadFileClicked(file: any){
    return file.click();
  }

}
