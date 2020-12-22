import { Component, OnInit } from '@angular/core';
import {InfoServiceService} from '../info-service.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private infoService: InfoServiceService) { }

  informations = [];

  ngOnInit(): void {
    this.infoService.getInfo().subscribe((data: any[]) => {
        this.informations = data;
        console.log(this.informations);
    });
  }

}
