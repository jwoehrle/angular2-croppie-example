import {Component, ViewChild} from '@angular/core';
import {ImageCropperComponent} from "./image-cropper/image-cropper.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  base64ImageData: string;

  @ViewChild(ImageCropperComponent) croppingComponent : ImageCropperComponent;

  public saveImageSelection() {
    this.croppingComponent.performCrop().then(base64Image => {
      this.base64ImageData = base64Image;
    });
  }
}
