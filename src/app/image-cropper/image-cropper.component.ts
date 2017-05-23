import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Croppie, {CroppieOptions, ResultOptions} from "croppie";

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit, OnDestroy {

  @ViewChild('divHandle') divHandle; ElementRef;
  @Input() croppieOptions: CroppieOptions;
  @Input() resultOptions: ResultOptions;
  @Input() initialZoom: number = 1;

  private defaultCroppieOptions: CroppieOptions ={
    //viewport: { width: 400, height: 400 },
    boundary: { width: 800, height: 800}
  };
  private defaultResultOptions: ResultOptions & { type: 'base64' } = {
    type: 'base64'
  };

  private cropper: Croppie;

  constructor() { }

  ngOnInit() {
    let options: CroppieOptions = this.croppieOptions ? this.croppieOptions : this.defaultCroppieOptions;
    let resultOptions : ResultOptions = this.resultOptions ? this.resultOptions : this.defaultResultOptions;

    this.cropper = new Croppie(this.divHandle.nativeElement, options);
    this.cropper.bind( { url:'assets/images/sample.jpg'}).then( response => {
      this.cropper.setZoom(this.initialZoom);
    });
  }

  ngOnDestroy() {
    if (this.cropper) {
      this.cropper.destroy();
    }
  }

  performCrop(): Promise<any> {
    return this.cropper.result(this.resultOptions);
  }
}
