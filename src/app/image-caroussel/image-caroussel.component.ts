import { Component, OnInit } from '@angular/core';
import {SlideserviceService} from '../slideservice.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-image-caroussel',
  templateUrl: './image-caroussel.component.html',
  styleUrls: ['./image-caroussel.component.scss']
})
export class ImageCarousselComponent implements OnInit {

  constructor(private slideService: SlideserviceService) { }
  images = [];
  images1;
  images2;
  images3;
  ngOnInit(): void {
      this.slideService.getSlide().subscribe((data: any[]) => {
        console.log(data);
        this.images = data;
        this.images1 = data[0];
        this.images2 = data[1];
        this.images3 = data[2];
    });
  }

}
