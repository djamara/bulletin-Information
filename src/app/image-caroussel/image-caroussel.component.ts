import { Component, OnInit } from '@angular/core';
import {SlideserviceService} from '../slideservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-caroussel',
  templateUrl: './image-caroussel.component.html',
  styleUrls: ['./image-caroussel.component.scss']
})
export class ImageCarousselComponent implements OnInit {

  constructor(private slideService: SlideserviceService) { }
  images = [];
  ngOnInit(): void {
      this.slideService.getSlide().subscribe((data: any[]) => {
        console.log(data);
        this.images = data;
    });
  }

}
