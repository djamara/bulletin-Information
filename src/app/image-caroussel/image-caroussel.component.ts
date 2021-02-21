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
  array = ['https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
    'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
    'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
    'https://mdbootstrap.com/img/Photos/Slides/img%20(7).jpg'
  ];
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
